var express = require("express"); //llamamos a Express
var app = express();
require("dotenv").config();
var port = process.env.PORT || 8080; // establecemos nuestro puerto

// para establecer las distintas rutas, necesitamos instanciar el express router
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
// var router = express.Router();
var router = require("./routes");
app.use("/api", router);

var mongoose = require("mongoose");

var db = process.env.DB;
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

// iniciamos nuestro servidor
app.listen(port);
console.log("API escuchando en el puerto " + port);
