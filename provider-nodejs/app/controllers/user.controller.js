const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = db.users;
const Op = db.Sequelize.Op;
const { body, validationResult } = require('express-validator');
const xss = require('xss');
const emailHandler = require("../sendgrid/email-handler.js")

// csrf = require('lusca').csrf;
require('dotenv').config({ path: '../../.env' });
// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.SECRETKEY, { expiresIn: '1h' });
};

// Login endpoint
let failedLoginAttempts = {}; // Store failed login attempts per user
const MAX_FAILED_ATTEMPTS = 3; // Maximum number of failed attempts before lockout

exports.login = async (req, res) => {

    // Sanitize username
    const username = xss(req.body.username);
    if (username === '__proto__' || username === 'constructor' || username === 'prototype') {
        res.end(403);
        return;
    }
    const password = req.body.password;

    try {
        // Check if the user's account is locked
        if (failedLoginAttempts[username] && failedLoginAttempts[username].attempts >= MAX_FAILED_ATTEMPTS) {
            const lockoutDuration = 5 * 60 * 1000; // 30 seconds lockout period
            const lockoutTime = failedLoginAttempts[username].lockoutTime;
            if (Date.now() - lockoutTime < lockoutDuration) {
                return res.status(403).send({ message: 'Account locked for 5 minutes. Please try again later.' });
            } else {
                // Reset failed login attempts after lockout duration expires
                delete failedLoginAttempts[username];
            }
        }

        // Find the user by username
        const user = await User.findOne({ where: { username } });
        if (!user) {
            incrementFailedAttempts(username); // Increment failed login attempts
            return res.status(401).send({ message: 'Invalid username or password.' });
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            incrementFailedAttempts(username); // Increment failed login attempts
            return res.status(401).send({ message: 'Invalid username or password.' });
        }

        // Reset failed login attempts upon successful login
        resetFailedAttempts(username);

        // Generate JWT token
        // Set the token as a cookie in the response
        res.cookie('token', generateToken(user), { httpOnly: true, maxAge: 3600000 }) // Cookie expries in one hour

        // Respond with a success message
        res.json({ success: true, message: user.role });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send({ message: 'Internal server error.' });
    }
};

// Helper function to increment failed login attempts
function incrementFailedAttempts(username) {
    if (!failedLoginAttempts[username]) {
        failedLoginAttempts[username] = {
            attempts: 1,
            lockoutTime: Date.now() // Set lockout time upon first failed attempt
        };
    } else {
        failedLoginAttempts[username].attempts++;
        if (failedLoginAttempts[username].attempts >= MAX_FAILED_ATTEMPTS) {
            failedLoginAttempts[username].lockoutTime = Date.now(); // Update lockout time upon reaching lockout threshold
        }
    }
}



// Helper function to reset failed login attempts upon successful login
function resetFailedAttempts(username) {
    delete failedLoginAttempts[username];
}


exports.logout = (req, res) => {
    // Clear the token cookie from the response headrs
    res.clearCookie('token');

    res.status(200).send({ message: 'Logout successful.' });

};


exports.create = async (req, res) => {
    // Validate request using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // escaping  characters for input sanitization
    const xss = require('xss');
    const sanitizedUsername = xss(req.body.username);
    const sanitizedPhoneNumber = xss(req.body.phone_number);
    const sanitizedEmail = xss(req.body.email);
    const sanitizedCounty = xss(req.body.county);

    try {
        // Check if user with the same username or email already exists
        const existingUser = await User.findOne({ where: { username: sanitizedUsername }});
    if (existingUser) {
        console.log("existingUser = " + existingUser.username);
        return res.status(409).json({ message: "Error with username, please select another" });
    }
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    }

    if (sanitizedUsername === '__proto__' || sanitizedUsername === 'constructor' || sanitizedUsername === 'prototype') {
        res.end(403);
        return;
    }

    if (sanitizedCounty === '__proto__' || sanitizedCounty === 'constructor' || sanitizedCounty === 'prototype') {
        res.end(403);
        return;
    }

    // Make phone numbers in format (###) ###-####
    let nums = sanitizedPhoneNumber.split('').filter(char => !isNaN(parseInt(char, 10)));
    if (nums.length === 10) {
        phoneNumber = `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
    } else if (nums.length === 7) {
        phoneNumber = `"${nums[0]}${nums[1]}${nums[2]}-${nums[3]}${nums[4]}${nums[5]}${nums[6]}"`;
    } else {
        res.end(403);
        return;
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the salt round

        // Create a User object with properties from request body
        const user = {
            username: sanitizedUsername,
            password: hashedPassword,
            phone_number: phoneNumber,
            email: sanitizedEmail,
            county: sanitizedCounty,
            verified: false,
            role: "contributor",
        };

        // Save User in the database
        const createdUser = await User.create(user);
        res.send(createdUser);

        const msg = {
            to: sanitizedEmail, // Change to your recipient
            from: 'caregiver-connect-test@outlook.com', // Change to your verified sender
            subject: 'New Caregiver Connect User Made',
            text: 'Your email is successfully registered with Caregiver Connect!'
        }

        emailHandler.sendMsg(msg)


    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    }
};

exports.createValidationRules = () => { // handle input validation
    return [
        body('username').notEmpty().isString().trim(),
        body('password').notEmpty().isString().trim().isLength({ min: 6 }),
        body('phone_number').notEmpty().isMobilePhone().trim(),
        body('email').notEmpty().isEmail().normalizeEmail(),
        body('county').notEmpty().isString().trim(),
    ];
};



// Retrieve Users from the database with search and counts them.
exports.findAndCountAll = (req, res) => {
    const search = req.query.search;
    const pageSize = req.query.pageSize;
    const offset = req.query.pageSize * (req.query.pageCurr - 1);
    const order = [req.query.orderCol, req.query.orderDirection];

    let condition = [];
    if (search) {
        condition.push({ username: { [Op.iLike]: `%${search}%` } })
        condition.push({ phone_number: { [Op.iLike]: `%${search}%` } })
        condition.push({ email: { [Op.iLike]: `%${search}%` } })
        condition.push({ county: { [Op.iLike]: `%${search}%` } })
        condition.push({ role: { [Op.iLike]: `%${search}%` } })
    }

    let or_condition = condition.length > 0 ? { [Op.or]: condition } : null;

    User.findAndCountAll({ where: or_condition, limit: pageSize, offset: offset, order: [order], attributes: { exclude: ['password'] } })
        .then(data => {
            res.send(data); // XSS input validation 
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};

// Change user role
exports.changeRole = (req, res) => {
    const username = req.params.username;
    const newRole = req.body.newRole;

    User.update({ role: newRole }, { where: { username: username } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User banned successfully!"
                });
            } else {
                res.send({
                    message: `Cannot update User with username=${username}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with =username" + username
            });
        });
};

// Retrieve single User by username from the database.
exports.findOneByUsername = (req, res) => {
    const username = req.query.username; // Change req.query.username to req.params.username

    User.findOne({ where: { username: username } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find User with username=${username}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
};

// Retrieve single User by email from the database.
exports.findOneByEmail = (req, res) => {
    const email = req.query.email; // Change req.query.email to req.params.email

    User.findOne({ where: { email: email } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find User with email=${email}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
};



// Update a User by the username in the request
exports.update = (req, res) => {
    const username = req.params.username;

    User.update(req.body, {
        where: { username: username }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with username=${username}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with username=" + username
            });
        });
};



// Delete a User with the specified username in the request
exports.delete = (req, res) => {
    const username = req.params.username;

    User.destroy({
        where: { username: username }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with username=${username}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with username=" + username
            });
        });
};

// Find all Users in a specific county
exports.findAllInCounty = (req, res) => {
    const county = req.query.county;

    User.findAll({ where: { county: county } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        });
};




