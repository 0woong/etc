const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    title: "test",
  });
});

// /test/main

router.get("/main");

module.exports = router;
