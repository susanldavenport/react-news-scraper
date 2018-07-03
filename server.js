const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

// Initialize Express
const app = express();

// Set Port
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use express.static to serve the public folder as a static directory
// app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// Set mongoose to leverage built in JavaScript ES6 Promises
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
