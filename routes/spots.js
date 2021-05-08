var router = require("express").Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

// .find({ $text: { $search: q } }

var Spot = require("../model/spots");

/// --------- routes ----------

router.get("/", function (req, res) {
  Spot.find(function (err, spots) {
    if (err) res.send(500, err.message);
    console.log("GET /spots ....");
    res.status(200);
    res.json(spots);
  });
});

router.get("/search", function (req, res) {
  var q = req.query.q;
  console.log("params", q);
  Spot.find({ $text: { $search: q } })
    .then((foundSpot) => {
      res.status(200).jsonp(foundSpot);
    })
    .catch((err) => {
      res.json({ message: "nothing found" });
    });
});

router.get("/location/:location", function (req, res) {
  const locationSearch = req.params;
  console.log("location search", locationSearch);
  Spot.find(locationSearch)
    .then((foundSpot) => {
      res.status(200).json(foundSpot);
    })
    .catch((err) => {
      res.json({ message: "nothing" });
    });
});

router.get("/spotType/:spotType", function (req, res) {
  const spotType = req.params;
  console.log("location search", spotType);
  Spot.find(spotType)
    .then((foundSpot) => {
      res.status(200).json(foundSpot);
    })
    .catch((err) => {
      res.json({ message: "nothing" });
    });
});

// ------ post ------
router.post("/", async (req, res, next) => {
  const { name, description, location, spotType, date } = req.body;
  console.log("j", name, description, location, spotType, date);
  try {
    const spot = await Spot.findOne({ name }, "name");
    console.log("ta subio", spot);
    if (spot) {
      res.jsonp({ message: "ya ta subio" });
      return;
    } else {
      await Spot.create({ name, description, location, spotType, date });
      // .then((newSpotDoc) => {
      console.log("created", name);
      res.status(201).jsonp({ message: "created" });
      // })
      // .catch((err) => {
      //   res.jsonp({ message: "un error al subirlo" });
      //   res.status(500).jsonp(err);
      // });
    }
  } catch (error) {
    // res.jsonp({ message: "parvo" });
    next(error);
  }
});

router.put("/:id", function (req, res) {
  res.json({ message: "Vas a actualizar el spot con id " + req.params.id });
});

router.delete("/:id", function (req, res) {
  res.json({ message: "Vas a borrar el spot con id " + req.params.id });
});
module.exports = router;
