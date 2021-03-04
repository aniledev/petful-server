const express = require("express");
const json = require("body-parser").json();
const store = require("../../store");

const Dogs = require("./dogs.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Use the filter method to return all dogs currently up for adoption in the cats array in a json format
  // status code of 200, success
  res.status(200).json(store);
});

router.delete("/", json, (req, res) => {
  // Remove a dog from adoption, first in first out, you can only delete the first item in the array, delete the first dog
  // status code of 204??, end() ??
});

module.exports = dogsRouter;
