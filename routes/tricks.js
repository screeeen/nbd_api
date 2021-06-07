var router = require("express").Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const Trick = require("../model/trick-model");

router.get("/", function (req, res) {
  Trick.find()
    .then((tricks) => {
      console.log("GET /tricks...");
      res.status(200);
      res.json(tricks);
    })
    .catch((error) => {
      res.status(500).json(err);
    });
});

// ------ post ------
router.post("/", async (req, res, next) => {
  const { name, skater, year, referenceURL, spotName } = req.body;
  console.log("post trick params", name, skater, year, referenceURL, spotName);
  try {
    const trick = await Trick.findOne({ name, name: spotName }, "name");
    console.log("ya ta subio el trick", trick);
    if (trick) {
      res.jsonp({ message: "ya ta subio el trick 2" });
      return;
    } else {
      await Trick.create({ name, skater, year, referenceURL });
      // .then((newSpotDoc) => {
      console.log("created", name, trick);
      res.status(201).jsonp({ message: "trick created" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
