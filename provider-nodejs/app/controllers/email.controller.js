const db = require("../models");
const jwt = require('jsonwebtoken');
const User = db.users;
const Op = db.Sequelize.Op;
const { body, validationResult } = require('express-validator');
const xss = require('xss');
const emailHandler = require("../sendgrid/email-handler.js")

const secretKey = process.env.SECRETKEY;

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
    
    const { email } = req.body;
    
    const verification_token = generateToken(email);
    
    const msg = {
        to: email, // Change to your recipient
        from: 'caregiver-connect-test@outlook.com', // Change to your verified sender
        subject: 'Verify Your New Caregiver Connect Account',
        text: `To verify your new Cargiver Connect account, please follow the verification link below:\nClick the following link to verify your email: http://cs495-spring2024-09.ua.edu:8081/api/email/verify-email?token=${verification_token}`
    }

    emailHandler.sendMsg(msg)
}

exports.verifyEmail = (req, res) => {
    const { token } = req.query;

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

        // Here, you would mark the email as verified in your database
        // Example database update code:
        // User.updateOne({ email: email }, { $set: { verified: true } })
        //   .then(() => res.send('Email verified successfully.'))
        //   .catch(error => {
        //     console.error('Error updating database:', error);
        //     res.status(500).send('An error occurred while verifying the email.');
        //   });

        // For demonstration purposes, just send a success response
        res.send(`Email ${xss(email)} verified successfully.`);
    }); 
}