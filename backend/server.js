const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const path = require('path');
const https = require("https");

require('dotenv').config({ path: './credentials.env' });

const options = {
  key: fs.readFileSync(path.resolve(__dirname, './openssl/certs/cs495-spring2024-09.ua.edu.key')),
  cert: fs.readFileSync(path.resolve(__dirname, './openssl/certs/cs495-spring2024-09.ua.edu.crt'))
};
const cookieParser = require('cookie-parser');



const app = express(); // exposing framework add extra line so it doesnt show you are using express
app.disable('x-powered-by'); // Hides that we are using express

// Enable CORS for requests from frontend
var whitelist = ['http://cs495-spring2024-09.ua.edu']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true // allow cookies and other credntials to be sent
};
app.use(cors(corsOptions));
app.use(cookieParser());
// app.use(csrf());


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

// Set the port and start listening for requests
const PORT = process.env.PORT || 8081;

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});