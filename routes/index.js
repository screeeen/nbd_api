var router = require("express").Router();
var spots = require("./spots");

router.use("/spots", spots);

router.get("/", function (req, res) {
  res.status(200).json({ message: "Estás conectado a nuestra API de spots" });
});

router.get("/:nombre", function (req, res) {
  res.json({ mensaje: "¡Hola " + req.params.nombre });
});

module.exports = router;
