const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http"); // Change from https to http
require('dotenv').config({ path: './credentials.env' });

const app = express();

<<<<<<< HEAD

app.use(cors());
=======
// Enable CORS for requests from http://localhost:8100
var corsOptions = {
  origin: "http://localhost:8100"
};
app.use(cors(corsOptions));
>>>>>>> main

// Connect to the database and synchronize models
const db = require("./app/models");
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to caregiver connect." });
});

// Require and configure provider routes
require("./app/routes/provider.routes")(app);
// Require and configure provider routes
require("./app/routes/user.routes")(app);

// Create an HTTP server instead of HTTPS
const server = http.createServer(app); // Change from https to http

// Set the port and start listening for requests
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
