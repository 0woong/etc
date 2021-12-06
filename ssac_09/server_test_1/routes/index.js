var express = require("express");
var router = express.Router();

const postsRouter = require("./posts/index");
const usersRouter = require("./users/index");

// router.get("/", (req, res, next) => {
//   res.status(404).json({
//     error: "page not found!!",
//   });
// });

router.use("/posts", postsRouter);
router.use("/users", usersRouter);

module.exports = router;
