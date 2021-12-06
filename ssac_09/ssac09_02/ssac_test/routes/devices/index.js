const express = require("express");
const { routes } = require("../../../express_test/app");
const router = express.Router();

const categoriesRouter = require("./categories/index");
router.use("/categories", categoriesRouter);
const devicesArr = [];
// 기기 정보 업로드
// method : POST
// url : /devices
// body : {name : 'computer', version : 1.1, price:  32000}

// response
// 200
// {message : '기기 정보 추가가 완료 되었습니다'}

// 400 (중복된 기기가 존재 했을 때)
// {message : '중복된 기기가 존재합니다'}

router.post("/", (req, res) => {
  const { name, version, price } = req.body; // {name : 'computer', version : 1.1, price:  32000}

  // [{name : 'computer', version : 1.1, price:  32000}, {name : 'computer', version : 1.1, price:  32000}];

  const deviceIdx = devicesArr.findIndex((item) => {
    return item.name === name;
  });

  if (deviceIdx === -1) {
    devicesArr.push({
      name, // name : name
      version, // version : version
      price, // price : price
    });
    res.status(200).json({
      message: "기기 정보 추가가 완료 되었습니다",
    });
  } else {
    res.status(400).json({
      message: "중복된 기기가 존재합니다.",
    });
  }
});

// 특정 기기 정보 조회
// method : GET
// url : /devices/:idx

// response
// 200
// {message : '기기 정보 조회 완료', data : 기기 정보 객체}

// 401 (기기정보가 존재하지 않을 때)
// {message : '기기 정보가 존재하지 않습니다'}

// router.get('/', (req, res) => {
//     if(devicesArr.length)
// })

router.get("/:idx", (req, res) => {
  const { idx } = req.params;

  if (idx < 0 || idx >= devicesArr.length)
    return res.status(409).json({ message: "idx 에러" });

  if (devicesArr[idx]) {
    // 특정 기기 정보 존재
    res.status(200).json({
      message: "기기 정보 조회 완료",
      data: devicesArr[idx],
    });
  } else {
    // 기기 정보가 존재하지 않음
    res.status(401).json({
      message: "기기 정보가 존재하지 않습니다",
    });
  }
});

// 기기 정보 수정
// method : PUT
// url : /devices
// body : {name : 'computer', version : 1.1, price:  40000}

// response
// 200
// {message : '기기 정보 수정이 완료 되었습니다', data : 수정 된 정보 객체}
// 400
// {message : '기기 정보가 존재하지 않습니다'}

router.put("/:idx", (req, res) => {
  const { idx } = req.params;
  const { name, version, price } = req.body;

  if (devicesArr[idx]) {
    // 기기 정보가 있을 경우
    usersArr[idx] = { name, version, price };
    res.status(200).json({
      message: "기기 정보 수정이 완료되었습니다",
      data: devicesArr[idx],
    });
  } else {
    // 기기가 없을 경우
    res.status(400).json({
      message: "기기 정보가 존재하지 않습니다",
    });
  }
});

// 기기 정보 삭제
// method : DELETE
// url : /devices/:idx

//response
// 200
// {message : '기기 삭제가 완료 되었습니다.}

// 400
// {message : '기기 정보가 존재하지 않습니다.'}

router.delete("/:idx", (req, res) => {
  const { idx } = req.params;

  if (devicesArr[idx]) {
    // 기기 정보가 있음
    devicesArr.splice(idx, 1);
    res.status(200).json({
      message: "기기 삭제가 완료 되었습니다",
    });
  } else {
    // 기기 정보가 없음
    res.status(400).json({
      message: "기기 정보가 존재하지 않습니다",
    });
  }
});

module.exports = router;
