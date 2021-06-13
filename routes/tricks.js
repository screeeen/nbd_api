var router = require("express").Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const Trick = require("../model/trick-model");
const Spot = require("../model/spots-model");

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
router.post("/", (req, res) => {
  const { name, skater, date, referenceURL, spot_Id } = req.body;

  let newTrick = new Trick({ name, skater, date, referenceURL, spot_Id });

  Trick.create(newTrick)
    .then((newTrickDoc) => {
      Spot.findByIdAndUpdate(
        { _id: spot_Id },
        {
          $push: {
            tricksRef: newTrickDoc._id,
            tricks: newTrickDoc,
          },
        },
        { new: true }
      )
        .then((updatedSpot) => {
          console.log("updated spot", updatedSpot);
          res.status(200).json(newTrickDoc);
        })
        .catch((err) => {
          console.log("error in", err);
        });
    })
    .catch((err) => {
      console.log("error", err);
    });
});

module.exports = router;
