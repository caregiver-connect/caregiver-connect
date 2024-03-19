const db = require("../models");
const Provider = db.providers;
const Op = db.Sequelize.Op;
var axios = require('axios');

// Create and Save a new Provider
exports.create = (req, res) => {
    // Validate request - You might want to add more specific validation logic
    if (!req.body.agency_name) {
        res.status(400).send({
            message: "Agency name can not be empty!"
        });
        return;
    }

    // Make phone numbers in format (###) ###-####
    let nums = req.body.phone_number.split('').filter(char => !isNaN(parseInt(char, 10)));
    if (nums.length === 10) {
        phone_number = `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
    } else if (nums.length === 7) {
        phone_number = `"${nums[0]}${nums[1]}${nums[2]}-${nums[3]}${nums[4]}${nums[5]}${nums[6]}"`;
    }

    var config = {
        method: 'get',
        url: 'https://api.geoapify.com/v1/geocode/search?text=' + req.body.addr1 + "%20" + req.body.addr2 + "%20" + req.body.city + "%20" + req.body.state + "%20" + req.body.zip + '&format=json&apiKey=11ab13c7e8804b96bc8c39dfeb8b97e7',
        headers: {}
    };

    axios(config)
        .then(function (response) {
            // console.log(response)
            console.log(response.data);
            console.log(response.data.results[0].street);
            // Create a Provider object with properties from request body
            const provider = {
                id_cms_other: req.body.id_cms_other,
                addr1: response.data.results[0].address_line1,
                addr2: req.body.addr2 || null,
                agency_name: req.body.agency_name,
                city: response.data.results[0].city,
                county: response.data.results[0].county,
                data_source: req.body.data_source || null,
                data_last_updated: req.body.data_last_updated || null,
                default_service_area_type: req.body.default_service_area_type || null,
                notes: req.body.notes || null,
                ownership_type: req.body.ownership_type,
                phone_number: phone_number,
                service_area_entities: req.body.service_area_entities || null,
                service_area_polygon: req.body.service_area_polygon || null,
                state: response.data.results[0].state_code,
                website: req.body.website || null,
                zip: response.data.results[0].postcode,
                coordinates: response.data.results[0].lon + " " + response.data.results[0].lat || null
            };

            // Save Provider in the database
            Provider.create(provider)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the Provider."
                    });
                });
        })
        .catch(function (error) {
            console.log(error);
        });
};



// Retrieve all Providers from the database.
exports.findAll = (req, res) => {
    const agency_name = req.query.agency_name;
    let condition = agency_name ? { agency_name: { [Op.iLike]: `%${agency_name}%` } } : null;

    Provider.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving providers."
            });
        });
};


// Find Providers by agency name
exports.findByAgencyName = (req, res) => {
    const agency_name = req.params.agency_name;

    Provider.findAll({ where: { agency_name: agency_name } })
        .then(data => {
            if (data && data.length > 0) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Providers with agency name=${agency_name}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Providers with agency name=" + agency_name
            });
        });
};

// Retrieve a single Provider by id_cms_other from the database.
exports.findOneByIdCmsOther = (req, res) => {
    const id_cms_other = req.query.id_cms_other;

    Provider.findOne({ where: { id_cms_other: id_cms_other } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Provider with id_cms_other=${id_cms_other}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving provider."
            });
        });
};




// Update a Provider by the id_cms_other in the request
exports.update = (req, res) => {
    const id_cms_other = req.params.id_cms_other;

    Provider.update(req.body, {
        where: { id_cms_other: id_cms_other }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Provider was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Provider with id_cms_other=${id_cms_other}. Maybe Provider was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Provider with id_cms_other=" + id_cms_other
            });
        });
};



// Delete a Provider with the specified id_cms_other in the request
exports.delete = (req, res) => {
    const id_cms_other = req.params.id_cms_other;

    Provider.destroy({
        where: { id_cms_other: id_cms_other }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Provider was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Provider with id_cms_other=${id_cms_other}. Maybe Provider was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Provider with id_cms_other=" + id_cms_other
            });
        });
};


// Find all Providers in a specific county
exports.findAllInCounty = (req, res) => {
    const county = req.query.county;

    Provider.findAll({ where: { county: county } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving providers."
            });
        });
};

// Find all Providers in a specific city
exports.findAllInCity = (req, res) => {
    const city = req.query.city;

    Provider.findAll({ where: { city: city } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving providers."
            });
        });
};



