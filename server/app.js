// dotenv require
require('dotenv').config();
// require("dotenv/config");

// PACKAGE REQUIRED
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const morgan = require("morgan");


// Calling the Express(), BodyParser, & a Static("public"), EJS Template to get extra styling and resources
const app = express();
app.use(express.static("public"));
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*=== MongoDB Connection Function===*/
connectDB();

// Port assigned to the server
const PORT = process.env.PORT || 3005;

// Dev Login Middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

/*======================= Routes Below ==========================*/ 
// ROUTES INPUT
const about = require("./routes/aboutRoute");
const project = require("./routes/projectRoute");
const services = require("./routes/serviceRoute");

// MOUNT ROUTERS
app.use("/", about);
app.use("/", project);
app.use("/", services);


// App Server is listening on a specific port created...
app.listen(PORT, function () {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
});
  