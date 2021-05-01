var express = require("express"); //llamamos a Express
var app = express();
require("dotenv").config();
var port = process.env.PORT || 8080; // establecemos nuestro puerto

// para establecer las distintas rutas, necesitamos instanciar el express router
var router = express.Router();

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use("/api", router);
var mongoose = require("mongoose");

var db = process.env.URL;

var connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(db, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

//establecemos nuestra primera ruta, mediante get.
router.get("/", function (req, res) {
  res.json({ mensaje: "¡Bienvenido a nuestra API!" });
});

router.get("/:nombre", function (req, res) {
  res.json({ mensaje: "¡Hola " + req.params.nombre });
});

// app.get("/", function (req, res) {
//   res.json({ mensaje: "¡Hola Mundo!" });
// });

// app.get("/cervezas", function (req, res) {
//   res.json({ mensaje: "¡A beber cerveza!" });
// });

// app.post("/", function (req, res) {
//   res.json({ mensaje: "Método post" });
// });

// app.del("/", function (req, res) {
//   res.json({ mensaje: "Método delete" });
// });

// iniciamos nuestro servidor
app.listen(port);
console.log("API escuchando en el puerto " + port);
