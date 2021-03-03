const express = require("express");
const json = require("body-parser").json();
const store = require("../../store");

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/pets", (req, res) => {
  // Return all pets currently up for adoption, entire array in store module in a json format
  // status code of 200, success
  res.status(200).json(store);
});

router.get("/cats", (req, res) => {
  // Use the filter method to return all cats currently up for adoption in the cats array in a json format
  // status code of 200, success
  res.status(200).json(store);
});

router.get("/dogs", (req, res) => {
  // Use the filter method to return all dogs currently up for adoption in the cats array in a json format
  // status code of 200, success
  res.status(200).json(store);
});

router.delete("/pets", json, (req, res) => {
  // Remove a pet from adoption, first in first out, you can only delete the first item in the array, delete the first pet
  // status code of 204??, end() ??
});

router.delete("/cats", json, (req, res) => {
  // Remove a cat from adoption, first in first out, you can only delete the first item in the array, delete the first cat
  // status code of 204??, end() ??
});

router.delete("/dogs", json, (req, res) => {
  // Remove a dog from adoption, first in first out, you can only delete the first item in the array, delete the first dog
  // status code of 204??, end() ??
});

module.exports = router;
