var router = require("express").Router();
var spots = require("./spots");

router.use("/spots", spots);

module.exports = router;
