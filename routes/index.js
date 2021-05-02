var router = require("express").Router();
var spots = require("./spots");

router.use("/spots", spots);

router.get("/", function (req, res) {
  res.status(200).json({ message: "Estás conectado a nuestra API de spots" });
});

module.exports = router;
