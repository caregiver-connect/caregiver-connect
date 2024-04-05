module.exports = app => {
  const userController = require("../controllers/user.controller.js");

  const { create, createValidationRules } = require('../controllers/user.controller.js');

  var router = require("express").Router();

  // Create a new user
  router.post("/", createValidationRules(), create);

  // Login a user
  router.post('/login', userController.login);

  // Retrieve Users from the database with search and counts them.
  router.get("/", userController.findAndCountAll);

  // Retrieve single User's username
  router.get("/username", userController.findOneByUsername);

  // Find all Users in a specific county
  router.get("/inCounty", userController.findAllInCounty);

  // Find all Users with a specific agency name
  router.get("/email", userController.findOneByEmail);

  // Route for logout
  router.post('/logout', userController.logout);

  // Change user role
  router.post('/changeRole/:username', userController.changeRole);

  // Update a Users by the username
  router.put("/:username", userController.update);

  // Delete a Users by username
  router.delete("/:username", userController.delete);



  app.use('/api/Users', router);
};