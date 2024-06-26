const express = require("express");
// const session = require("express-session");
// const csrf = require('lusca').csrf;
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const cookieParser = require('cookie-parser');
const RateLimit = require("express-rate-limit")
require('dotenv').config({ path: './.env' });

const app = express();
app.disable('x-powered-by');

const limiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

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
  credentials: true
};
app.use(cors(corsOptions));
app.use(cookieParser());
// app.use(session({ cookie: { maxAge: 60000, secure: false }})); // change cookie to secure when https is working
// app.use(csrf({ cookie: {name: '_csrf'}, secret: 'qwerty' }));

const db = require("./app/models");
db.sequelize.sync({ alter: true });

// Set security headers
app.use((req, res, next) => {
  // HTTP Strict Transport Security (HSTS)
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');

  // Cross-Site Scripting Protection (X-XSS-Protection)
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Website IFrame Protection (X-Frame-Options)
  res.setHeader('X-Frame-Options', 'DENY');

  // Preventing Content-Type Sniffing (X-Content-Type-Options)
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Content Security Policy (CSP)
  res.setHeader('Content-Security-Policy', "default-src 'self'");

  // Permissions-Policy
  res.setHeader('Permissions-Policy', "geolocation=(self 'https://example.com')");

  next();
});

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
const server = http.createServer(app);

// Set the port and start listening for requests
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
