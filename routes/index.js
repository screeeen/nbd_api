var router = require("express").Router();
var cervezas = require("./cervezas");

router.use("/cervezas", cervezas);

router.get("/", function (req, res) {
  res.status(200).json({ message: "Estás conectado a nuestra API de birras" });
});

router.get("/:nombre", function (req, res) {
  res.json({ mensaje: "¡Hola " + req.params.nombre });
});

module.exports = router;
