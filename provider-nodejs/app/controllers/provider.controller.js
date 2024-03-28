const db = require("../models");
const Provider = db.providers;
const jwt = require('jsonwebtoken');
const Op = db.Sequelize.Op;
const { body, validationResult } = require('express-validator');
const xss = require('xss');
require('dotenv').config({ path: '../../.env' });
var axios = require('axios');

// Validation rules for the properties of the provider object
exports.providerValidationRules = () => {
    return [
        body('id_cms_other').notEmpty(),
        body('addr1').notEmpty(),
        body('agency_name').notEmpty(),
        body('city').notEmpty(),
        body('county').notEmpty(),
        body('ownership_type').notEmpty().isAlpha(),
        body('phone_number').notEmpty(),
        body('state').notEmpty(),
        body('zip').notEmpty(),
    ];
};

// Middleware function to handle validation errors
exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next(); // Proceed to the next middleware
    }

    // If there are validation errors, return them as response
    return res.status(400).json({ errors: errors.array() });
};  // Not working and IM tired

// JWT Middleware for authorizing users
exports.authenticateJWT = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Input validation error
    }

    const token = req.cookies.token;
    //console.log("HERE\n");
    if (!token) {
        return res.status(401).json({ message: 'Please login to add a provider' });
    }
    jwt.verify(token, 'your-secret-key', (err, decodedToken) => { // change to environment variables later
        if (err) {
            return res.status(401).json({ message: 'Invalid token.' });
        }
        req.user = decodedToken; // Attach user info to the request object
        next(); // Go to next middleware function
    });
};
// Create and Save a new Provider
exports.create = (req, res) => {
    //console.log("YAY\n");
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
            console.log(response.data);
            // Create a Provider object with properties from request body
            const provider = {
                id_cms_other: xss(req.body.id_cms_other),
                addr1: xss(response.data.results[0].address_line1),
                addr2: xss(req.body.addr2 || null),
                agency_name: xss(req.body.agency_name),
                city: xss(response.data.results[0].city),
                county: xss(response.data.results[0].county),
                data_source: xss(req.body.data_source || null),
                data_last_updated: xss(req.body.data_last_updated || null),
                default_service_area_type: xss(req.body.default_service_area_type || null),
                notes: xss(req.body.notes || null),
                ownership_type: xss(req.body.ownership_type),
                phone_number: xss(phone_number),
                service_area_entities: xss(req.body.service_area_entities || null),
                service_area_polygon: xss(req.body.service_area_polygon || null),
                state: xss(response.data.results[0].state_code),
                website: xss(req.body.website || null),
                zip: xss(response.data.results[0].postcode),
                coordinates: xss(response.data.results[0].lon + " " + response.data.results[0].lat || null)
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



// Retrieve Providers from the database with search and counts them.
exports.findAndCountAll = (req, res) => {
    const search = req.query.search;
    const pageSize = req.query.pageSize;
    const offset = req.query.pageSize * (req.query.pageCurr - 1);
    const order = [req.query.orderCol, req.query.orderDirection];

    let condition = [];
    if (search) {
        condition.push({ id_cms_other: { [Op.iLike]: `%${search}%` } })
        condition.push({ addr1: { [Op.iLike]: `%${search}%` } })
        condition.push({ addr2: { [Op.iLike]: `%${search}%` } })
        condition.push({ agency_name: { [Op.iLike]: `%${search}%` } })
        condition.push({ city: { [Op.iLike]: `%${search}%` } })
        condition.push({ county: { [Op.iLike]: `%${search}%` } })
        condition.push({ ownership_type: { [Op.iLike]: `%${search}%` } })
        condition.push({ phone_number: { [Op.iLike]: `%${search}%` } })
        condition.push({ state: { [Op.iLike]: `%${search}%` } })
        condition.push({ website: { [Op.iLike]: `%${search}%` } })
        condition.push({ zip: { [Op.iLike]: `%${search}%` } })
    }

    let or_condition = condition.length > 0 ? { [Op.or]: condition } : null;

    Provider.findAndCountAll({ where: or_condition, offset: offset, limit: pageSize, order: [order] })
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



