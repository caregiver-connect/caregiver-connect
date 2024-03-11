const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = db.users;
const Op = db.Sequelize.Op;
const { body, validationResult } = require('express-validator');

// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, 'your-secret-key', { expiresIn: '1h' }); // Change 'your-secret-key' to your actual secret key
};

// Login endpoint
let failedLoginAttempts = {}; // Store failed login attempts per user
const MAX_FAILED_ATTEMPTS = 3; // Maximum number of failed attempts before lockout

exports.login = async (req, res) => {
    const { username, password } = req.body;

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
            return res.status(401).send({ message: 'Invalid username and password combination.' });
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            incrementFailedAttempts(username); // Increment failed login attempts
            return res.status(401).send({ message: 'Invalid username and password combination.' });
        }

        // Reset failed login attempts upon successful login
        resetFailedAttempts(username);

        // Generate JWT token
        const token = generateToken(user);

        // Send the token in the response
        res.send({ token });
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





exports.create = async (req, res) => {
    // Validate request using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the salt round

        // Create a User object with properties from request body
        const user = {
            username: req.body.username,
            password: hashedPassword,
            phone_number: req.body.phone_number,
            email: req.body.email,
            county: req.body.county,
        };

        // Save User in the database
        const createdUser = await User.create(user);
        res.send(createdUser);
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



// Retrieve all users from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  let condition = username ? { username: { [Op.iLike]: `%${username}%` } } : null;

  User.findAll({ where: condition })
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




