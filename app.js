var express = require("express"); //llamamos a Express
var app = express();
require("dotenv").config();
var port = process.env.PORT || 8080; // establecemos nuestro puerto
var bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json()); // support json encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var router = require("./routes");
var mongoose = require("mongoose");

var db = process.env.DB;
var connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(db, connectionParams)
  .then((x) => {
    console.log(`Connected to database ${x.connections[0].name}`);
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// app.use(
//   cors({
//     credentials: false,
//     origin: ["http://localhost:3000/"], //
//   })
// );

app.use(cors());
app.use("/api", router);

//establecemos nuestra primera ruta, mediante get.
router.get("/", function (req, res) {
  res.json({ mensaje: "¡Bienvenido a nuestra API!" });
});

// iniciamos nuestro servidor
app.listen(port);
console.log("API escuchando en el puerto " + port);
