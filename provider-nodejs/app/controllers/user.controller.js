const db = require("../models");
const bcrypt = require('bcrypt');
const User = db.users;
const Op = db.Sequelize.Op;

/*console.log("Debug statement: User =", User);

if (typeof User === 'undefined') {
    console.log("myObject is undefined");
} else {
    console.log("myObject is defined");
} */

// Create and Save a new user

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.username || !req.body.password ||  !req.body.county || !req.body.email || !req.body.phone_number) {
        res.status(400).send({
            message: "Username and password are required fields."
        });
        return;
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




// Retrieve all users from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  let condition = username ? { username: { [Op.iLike]: `%${username}%` } } : null;

  User.findAll({ where: condition })
      .then(data => {
          res.send(data);
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




