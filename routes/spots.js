var router = require("express").Router();
const mongoose = require("mongoose");

// var Spot = mongoose.model("Spot", Spot);
var Spot = require("../model/spots");

exports.findById = function (req, res) {
  Spot.findById(req.params.id, function (err, spot) {
    if (err) return res.send(500, err.message);

    console.log("GET /spot/" + req.params.id);
    res.status(200).jsonp(spot);
  });
};

//POST - Insert a new Spot in the DB
exports.addSpot = function (req, res) {
  console.log("POST");
  console.log(req.body);
  var spot = new Spot({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    spotType: req.body.spotType,
    year: req.body.year,
  });

  spot.save(function (err, spot) {
    if (err) return res.status(500).send(err.message);
    res.status(200).jsonp(spot);
  });
};

/// --------- routes ----------

router.get("/search", function (req, res) {
  res.json({ message: "Vas a buscar un spot" });
});

router.get("/", function (req, res) {
  Spot.find(function (err, spots) {
    if (err) res.send(500, err.message);
    console.log("GET /spots");
    res.status(200).jsonp(spots);
  });
});

router.get("/:location", function (req, res) {
  async (req, res, next) => {
    const { location } = req.body;
    try {
      const spot = await Spot.findOne({ location }, "location");
      res.json({
        message: "Vas a obtener el spot con location " + req.params.id,
      });
      if (spot) return spot;
    } catch (error) {
      next(error);
    }
  };
});

router.post("/", function (req, res) {
  res.json({ message: "Vas a añadir un spot" });
});
router.put("/:id", function (req, res) {
  res.json({ message: "Vas a actualizar el spot con id " + req.params.id });
});
router.delete("/:id", function (req, res) {
  res.json({ message: "Vas a borrar el spot con id " + req.params.id });
});
module.exports = router;
