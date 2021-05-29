var router = require("express").Router();
var spots = require("./spots");

router.use("/spots", spots);
// router.use("/tricks", tricks);
// router.use("/skaters", skaters);

module.exports = router;
