var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const devicesRouter = require("./devices/index");

router.use("/devices", devicesRouter);

module.exports = router;
