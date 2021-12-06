const express = require("express");
const router = express.Router();

// 유저 생성
// method : POST
// url : /users
// body : {name:'lee', age:'26', love:'kimchi'}

// response
// 중복된 이름이 없는 경우
// {message : '중복된 이름이 존재합니다'}

// 유서 생성이 잘 되었을 경우
// {message : '유저가 성공적으로 생성 되었습니다'}

router.post("/many", (req, res) => {
  const { data } = req.body;

  data.forEach((Element) => {
    const userIdx = usersArr.findIndex((item) => {
      return item.name === element.name;
    });
  });
});

router.post("/", (req, res) => {
  const { name, age, love } = req.body; // {name:'lee', age:'26', love:'kimchi'}

  // ['apple', 'banana'];
  // [{name:'lee', age:'26', love:'kimchi'}, {name:'lee', age:'26', love:'kimchi'}];

  // 없으면 -1, 있으면 index return
  usersArr.findIndex((item, index) => {
    // item = {name:'lee', age:'26', love:'kimchi'}
    return item.name === name;
  });

  if (userIdx === -1) {
    // 기존 배열에 해당하는 유저 정보가 없는 것
    usersArr.push({
      name, // name : name
      age, // age : age
      love, // love : love
    });
    res.status(200).json({
      message: "유저가 성공적으로 생성 되었습니다.",
    });
  } else {
    res.status(409).json({
      message: "중복된 이름이 존재합니다.",
    });
  }
});

// 유저 이름을 받아서 조회
// method : GET
// url : /users/:name

// response
// 해당 유저가 있을 경우
// status 200
// {message: '유저를 찾았습니다', data : {name:'lee', age: '40', love: 'singing'}}

// 해당 유저가 없을 경우
// status 404
// {message: '유저 정보가 없습니다.'}

// 유저 조회(Read)
router.get("/users/:name", (req, res) => {
  const { name, age, love } = req.params; //{name:'lee', age: '40', love: 'singing'}}
  const userIdx = usersArr.findIndex((item) => item.name === name);

  if (userIdx === -1) {
    // 해당 유저가 없는 경우
    res.status(404).json({
      message: "유저 정보가 없습니다.",
    });
  } else {
    // 유저가 있는 경우
    const rusult = userArr[userIdx]; // 결과값
    res.status(200).json({
      message: "유저를 찾았습니다",
      data: result,
    });
  }
});

// 유저 수정
// method : PUT
// url : /users/:idx
// body : {name : 유저이름, age: 나이, love: 좋아하는 것}

// response
// 유저를 잘 찾았을 때
// {message : '수정 완료', data : 해당 유저 데이터}

//유저를 못 찾았을 때
// status 400
// {message : '유저를 찾지 못 했습니다'}

router.put("/:idx", (req, res) => {
  const { idx } = req.params;
  const { name, age, love } = req.body;

  if (usersArr[idx]) {
    // 유저가 있을 경우
    usersArr[idx] = { name, age, love };
    res.status(200).json({
      message: "수정 완료", // {name : 유저이름, age: 나이, love: 좋아하는 것}
      data: usersArr[idx],
    });
  } else {
    // 유저가 없을 경우
    res.status(400).json({
      message: "유저를 찾지 못 했습니다",
    });
  }
});

// 유저 삭제
// method : delete
// url : /users/:idx

// response
// 200
// {message : '삭제 성공', data : userArr}

// 400
// {message : '유저를 찾을 수 없습니다'}

router.delete("/:idx", (req, res) => {
  const { idx } = req.params;

  // 0 < idx > array.length

  if (idx < 0 || idx >= usersArr.length) {
    res.status(400).json({
      message: "올바르지 않은 index 값입니다",
    });
  }

  // if (usersArr[idx]) {
  //   // 유저가 있는 경우
  //   usersArr.splice(idx, 1);
  //   delete
  // }
  // // else {
  // //   // 유저가 없는 경우
  // // }
});

router.use("/users", usersRouter);

// 댓글을 추가하는 라우터
// {message : '댓글 추가 완료'}

// 전체 댓글을 조회하는 라우터
// {message : '전체 댓글 조회 완료'}

// 특정 댓글(idx)을 조회하는 라우터
// {message : '특정 댓글 조회 완료'}

// 특정 댓글(idx)을 삭제하는 라우터
// {message : '특정 댓글 삭제 완료'}

// 특정 댓글(idx)을 수정하는 라우터
// {message : '특정 댓글 수정 완료'}

// 특정 댓글(idx)을 신고하는 라우터
// {message : '특정 댓글 신고 완료'}

// /comments

router.put("/", (req, res) => {
  res.json({
    message: "댓글 추가 완료",
  });
});

router.get("/", (req, res) => {
  res.json({
    message: "전체 댓글 조회 완료",
  });
});

router.get("/", (req, res) => {
  const [idx] = req.params;
  res.json({
    message: "특정 댓글 조회 완료",
  });
});

router.delete("/", (req, res) => {
  const [idx] = req.params;
  res.json({
    message: "특정 댓글 삭제 완료",
  });
});

router.put("/", (req, res) => {
  const [idx] = req.params;
  res.json({
    message: "특정 댓글 수정 완료",
  });
});

module.exports = router;
