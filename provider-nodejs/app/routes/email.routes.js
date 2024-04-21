
module.exports = app => {
    const emailController = require("../controllers/email.controller.js");
    const {sendVerificationEmail} = require("../controllers/email.controller.js");
    
    var router = require("express").Router();
    
    router.post("/send-verification-email", emailController.sendVerificationEmail);
    
    router.post("/verify-email", emailController.verifyEmail);
    
    router.post("/reset-password-email", emailController.sendPasswordResetEmail);

    router.post("/reset-password", emailController.resetPassword);

    app.use('/api/email', router);
}