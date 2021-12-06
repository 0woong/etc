// 메인 실행 파일

// const nameModule = require("./modules/name");

// nameModule("주영웅");

const stringModule = require("./modules/string");
const numberModule = require("./modules/number");

function one(str) {
  const strArr = str.split("");
  const strSet = new Set(strArr);
  const uniqueArr = Array.from(strSet); // [... strSet]
  return uniqueArr.join(""); //aple
}

const moduleArr = ["apple", "ssac"];

moduleArr.forEach((item) => {
  one(item);
});
