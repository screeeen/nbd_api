var router = require("express").Router();
router.get("/search", function (req, res) {
  res.json({ message: "Vas a buscar un spot" });
});
router.get("/", function (req, res) {
  res.json({ message: "Estás conectado a la API de spots" });
});
router.get("/:id", function (req, res) {
  res.json({ message: "Vas a obtener el spot con id " + req.params.id });
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
