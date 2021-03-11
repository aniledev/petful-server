// MODULES AND PACKAGES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const winston = require("winston");
const { NODE_ENV, PORT } = require("../../src/config");
const catsRouter = require("../cats/cats.router");
const dogsRouter = require("../dogs/dogs.router");
const peopleRouter = require("../people/people.router");
const errorHandler = require("../../src/error-handler");
const notFoundError = require("../../src/not-found-error");
const logger = require("../../src/logger");

const app = express();

// MIDDLEWARE
const morganOption = NODE_ENV === "production" ? "tiny" : "dev";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/cats", catsRouter);
app.use("/api/dogs", dogsRouter);
app.use("/api/people", peopleRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// 404 ERROR HANDLER MIDDLEWARE
app.use(notFoundError);

// GENERAL ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

module.exports = app;
