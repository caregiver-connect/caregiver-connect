const db = require("../models");
const Provider = db.providers;
const jwt = require('jsonwebtoken');
const Op = db.Sequelize.Op;
const { body, validationResult } = require('express-validator');
// const DOMPurify = require('dompurify');


// Validation rules for the properties of the provider object
exports.providerValidationRules = () => {

    return [
        body('id_cms_other').notEmpty().withMessage('ID CMS Other is required'),
        body('addr1').notEmpty().withMessage('Address 1 is required'),
        body('agency_name').notEmpty().withMessage('Agency Name is required'),
        body('city').notEmpty().isAlpha().withMessage('City is required'),
        body('county').notEmpty().isAlpha().withMessage('County is required'),
        body('ownership_type').notEmpty().isAlpha().withMessage('Ownership Type is required'),
        body('phone_number').notEmpty().withMessage('Phone Number is required').isMobilePhone().withMessage('Invalid Phone Number'),
        body('state').notEmpty().withMessage('State is required').isAlpha().withMessage('State should only contain letters'),
        body('zip').notEmpty().isLength({ min: 5, max: 5 }).withMessage('ZIP Code must be exactly 5 characters'),
    ];
};

// Middleware function to handle validation errors
/* exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next(); // Proceed to the next middleware
    }

    // If there are validation errors, return them as response
    return res.status(400).json({ errors: errors.array() });
}; */ // Not working and IM tired

// JWT Middleware for authorizing users
exports.authenticateJWT = (req, res, next) => {
    const token = req.cookies.token;
    //console.log("HERE\n");
    if (!token) {
        return res.status(401).json({ message: 'Please login to add a provider' });
    }
    jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
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
    
    // Create a Provider object with sanitized properties from request body
    const provider = {
        id_cms_other: req.body.id_cms_other,
        addr1: req.body.addr1,
        addr2: req.body.addr2 || null,
        agency_name: req.body.agency_name,
        city: req.body.city,
        county: req.body.county,
        data_source: req.body.data_source || null,
        data_last_updated: req.body.data_last_updated || null,
        default_service_area_type: req.body.default_service_area_type || null,
        notes: req.body.notes || null,
        ownership_type: req.body.ownership_type,
        phone_number: req.body.phone_number,
        service_area_entities: req.body.service_area_entities || null,
        service_area_polygon: req.body.service_area_polygon || null,
        state: req.body.state,
        website: req.body.website || null,
        zip: req.body.zip,
        coordinates: req.body.coordinates || null
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



