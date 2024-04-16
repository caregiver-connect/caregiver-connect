
module.exports = app => {
    const emailController = require("../controllers/email.controller.js");
    const {sendVerificationEmail} = require("../controllers/email.controller.js");
    
    var router = require("express").Router();
    
    router.post("/send-verification-email", emailController.sendVerificationEmail);
    
    router.post("/verify-email", emailController.verifyEmail)
    
    app.use('/api/email', router);
}