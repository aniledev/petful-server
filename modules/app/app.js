// MODULES AND PACKAGES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const winston = require("winston");
const { NODE_ENV, PORT } = require("../../config");
const petsRouter = require("../pets/pets.router");
const catsRouter = require("../cats/cats.router");
const dogsRouter = require("../dogs/dogs.router");
const peopleRouter = require("../people/people.router");
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
app.use("/api/pets", petsRouter);
app.use("/api/cats", catsRouter);
app.use("/api/dogs", dogsRouter);
app.use("/api/people", peopleRouter);


app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

module.exports = app;
