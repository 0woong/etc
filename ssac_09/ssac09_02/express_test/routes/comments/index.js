const express = require("express");
const router = express.Router();

// 댓글을 추가하는 라우터
// {message : '댓글 추가 완료'}

router.post("/", (req, res) => {
  res.status(200).json({
    message: "댓글 추가 완료",
  });
});

// 전체 댓글을 조회하는 라우터
// {message : '전체 댓글 조회 완료'}

router.get("/", (req, res) => {
  res.status(200).json({
    message: "전체 댓글 조회 완료",
  });
});

// 특정 댓글(idx)을 조회하는 라우터 /comments/5
// {message : '특정 댓글 조회 완료'}

router.get("/:idx", (req, res) => {
  res.status(200).json({
    message: "특정 댓글 조회 완료",
  });
});

// 특정 댓글(idx)을 삭제하는 라우터
// {message : '특정 댓글 삭제 완료'}

router.delete("/:idx", (req, res) => {
  res.status(200).json({
    message: "특정 댓글 삭제 완료",
  });
});

// 특정 댓글(idx)을 수정하는 라우터
// {message : '특정 댓글 수정 완료'}

router.put("/:idx", (req, res) => {
  res.status(200).json({
    message: "특정 댓글 수정 완료",
  });
});

// 특정 댓글(idx)을 신고하는 라우터
// {message : '특정 댓글 신고 완료'}

router.post("/:idx/", (req, res) => {});

module.exports = router;
