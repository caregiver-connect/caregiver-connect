const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http"); // Change from https to http
const cookieParser = require('cookie-parser');
//csrf = require('lusca').csrf;
require('dotenv').config({ path: './.env' });


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
db.sequelize.sync({ alter: true });

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
// Require and configure user routes
require("./app/routes/user.routes")(app);

require("./app/routes/email.routes")(app);

// Create an HTTP server instead of HTTPS
const server = http.createServer(app); // Change from https to http

// Set the port and start listening for requests
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
