const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
require('dotenv').config({ path: './credentials.env' });


const app = express();

// Enable CORS for requests from http://localhost:8100
var corsOptions = {
  origin: "http://localhost:8100"
};
app.use(cors(corsOptions));

// Connect to the database and synchronize models
const db = require("./app/models");
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Require and configure provider routes
require("./app/routes/provider.routes")(app);

// HTTPS options with self-signed certificate
const httpsOptions = {
  key: fs.readFileSync('ca.key'),
  cert: fs.readFileSync('155f677d.crt'),
  // Provide the passphrase to decrypt the private key
  passphrase: process.env.passphrase,
  rejectUnauthorized: false // Disable SSL certificate verification
};

// Create an HTTPS server
const server = https.createServer(httpsOptions, app);

// Set the port and start listening for requests
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
