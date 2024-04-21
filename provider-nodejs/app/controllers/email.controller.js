const db = require("../models");
const jwt = require('jsonwebtoken');
const User = db.users;
const Op = db.Sequelize.Op;
const { body, validationResult } = require('express-validator');
const xss = require('xss');
const emailHandler = require("../sendgrid/email-handler.js")

const secretKey = process.env.TOKEN_SECRET;

// Function to generate token
function generateToken(email) {
    // Create payload
    const payload = {
        email: email,
        // You can add more data to the payload if needed, such as expiration time, user ID, etc.
    };

    // Sign the token with the secret key and return it
    return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
}

exports.sendVerificationEmail = (req, res) => {
    
    const { email, user_id } = req.body;
    
    const verification_token = generateToken(email);
    
    const msg = {
        to: email, // Change to your recipient
        from: 'caregiver-connect-test@outlook.com', // Change to your verified sender
        subject: 'Verify Your New Caregiver Connect Account',
        text: `To verify your new Cargiver Connect account, please follow the verification link below:\nClick the following link to verify your email: http://cs495-spring2024-09.ua.edu/verify-email/?token=${verification_token}&user=${user_id}\nThis link will expire in 1 hour.`
    }

    emailHandler.sendMsg(msg)
}

exports.verifyEmail = (req, res) => {
    const { token, user_id } = req.body;

    if (!token) {
        return res.status(400).send('Token is required.');
    }

    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.status(401).send('Invalid or expired token.');
        }

        // Extract necessary information from the decoded token
        const { email } = decoded;

        User.update({ verified: true }, { where: { username: user_id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User email verified successfully!"
                });
            } else {
                res.send({
                    message: `Cannot update User with username=${user_id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with username" + user_id
            });
        });

        // For demonstration purposes, just send a success response
        // res.send(`Email ${email} verified successfully.`);
    });
}

exports.sendVerificationEmail = (req, res) => {

    const { email, user_id } = req.body;

    const verification_token = generateToken(email);

    const msg = {
        to: email, // Change to your recipient
        from: 'caregiver-connect-test@outlook.com', // Change to your verified sender
        subject: 'Verify Your New Caregiver Connect Account',
        text: `To verify your new Cargiver Connect account, please follow the verification link below:\nClick the following link to verify your email: http://cs495-spring2024-09.ua.edu:8081/api/email/verify-email?token=${verification_token}&user=${user_id}\nThis link will expire in 1 hour.`
    }
}

exports.sendPasswordResetEmail = (req, res) => {

    const { email, user_id } = req.body;

    const verification_token = generateToken(email);

    const msg = {
        to: email, // Change to your recipient
        from: 'caregiver-connect-test@outlook.com', // Change to your verified sender
        subject: 'Reset your Caregiver Connect Password',
        text: `To reset your Cargiver Connect account password, please follow the reset link below:\nClick the following link to verify your email: http://cs495-spring2024-09.ua.edu/reset-password?token=${verification_token}&user=${user_id}\nThis link will expire in 1 hour.`
    }

}

exports.resetPassword = (req, res) => {

    const { token, user_id, password } = req.body;

    if (!token) {
        return res.status(400).send('Token is required.');
    }

    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.status(401).send('Invalid or expired token.');
        }

        // Extract necessary information from the decoded token
        const { email } = decoded;

        User.update({ password: "password" }, { where: { username: user_id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User password updated successfully!"
                });
            } else {
                res.send({
                    message: `Cannot update User with username=${user_id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with username" + user_id
            });
        });

        // For demonstration purposes, just send a success response
        // res.send(`Email ${email} verified successfully.`);
    });
}