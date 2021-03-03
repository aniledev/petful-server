// MODULES AND PACKAGES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const winston = require("winston");
const { NODE_ENV, PORT } = require("../../config");
const errorHandler = require("../../error-handler");
const logger = require("../../logger");
const app = express();

// MIDDLEWARE
const morganOption = NODE_ENV === "production" ? "tiny" : "dev";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/people", require("../people/people.router"));
app.use("/pets", require("../pets/pets.router"));
// add a get endpoint that returns the string hello world used to test
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

module.exports = app;
