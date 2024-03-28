module.exports = app => {
  const providerController = require("../controllers/provider.controller.js");
  const { authenticateJWT, providerValidationRules, create } = require('../controllers/provider.controller.js');

  var router = require("express").Router();
  // Create a new Provider. Authenticate they can add, validate what they are adding
  router.post("/", providerValidationRules(), authenticateJWT, create);

  // Retrieve Providers from the database with search and counts them.
  router.get("/", providerController.findAndCountAll);

  // Retrieve single provider id_cms_other
  router.get("/IdCmsOther", providerController.findOneByIdCmsOther);

  // Find all Providers in a specific county
  router.get("/inCounty", providerController.findAllInCounty);

  // Find all Providers in a specific city
  router.get("/inCity", providerController.findAllInCity);

  // Find all Providers with a specific agency name
  router.get("/:agency_name", providerController.findByAgencyName);

  // Update a Provider by the id_cms_other
  router.put("/:id_cms_other", providerController.update);

  // Delete a Provider by id_cms_other
  router.delete("/:id_cms_other", providerController.delete);

  app.use('/api/providers', router);
};