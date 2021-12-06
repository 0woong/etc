var express = require("express");
const upload = require("../modules/imgUpload");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/images", upload.single("img"), (req, res) => {
  const file = req.file;
  console.log(file);

  res.json({
    message: "이미지 업로드 완료",
  });
});

module.exports = router;
