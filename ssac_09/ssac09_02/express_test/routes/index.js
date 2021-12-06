// 이정표

var express = require("express");
var router = express.Router();

const postsRouter = require("./posts/index");
// const usersRouter = require("./users/index");
const commentsRouter = require("./comments/index");

// /posts
router.use("/posts", postsRouter);

// /users

// router.get("/posts", (req, res) => {
//   res.status(200).json({
//     message: "조회 성공",
//   });
// });

// router.get("/posts/:id", (req, res) => {
//   res.status(200).json({
//     message: "게시물 조회 성공",
//   });
// });

// router.get("/posts/:id", (req, res) => {
//   // 1
//   const id = req.params.id;

//   //2
//   const { is } = req.params;

//   if (id === "0") {
//     // id 값이 0 일 때
//     res.status(404).json({
//       message: "해당 게시물이 존재하지 않습니다.",
//     });
//   } else {
//     // id 값이 그 외일 때
//     res.status(200).json({
//       message: "게시물 조회 성공",
//     });
//   }
// });

// * Request
// method : GET
// url : /posts

// * Response
// {
//   message : '조회 성공'
// }

module.exports = router;
