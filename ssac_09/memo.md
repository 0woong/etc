자바스크립트는 스크립트언어

arr.push(4); // 앞
arr.unshift(4); // 뒤

array.pop(); // 맨 뒤 값 삭제하고 제거된 요소 반환
array.(); // 맨 앞 값 삭제하고 제거된 요소 반환

js에서 함수는 일급 객체

함수 선언문

- 함수명 반드시 필요
- function 키워드 사용

const 변수명= function(){
구현로직
}

화살표 함수

- ES6문법
- 간결한 표현식
- return문 줄일 수 있음
  const func = () => {};

JSON

- js에서 객체를 만들 때 사용하는 표현식
- 특정언어에 종속되지않음 : 독립적
- const 객체이름 = {
  key: value,
  "key2": value2
  };

객체요소접근

- for (key in json) {
  console.log(key+','+json[key]);
  }
- json["key"]
- json.key

nodejs

- 이벤트 기반 시스템
- 싱글 스레드: 주어진 작업 혼자처리
- 비동기방식
- non-blocking

터미널

- cd.. -> 상위폴더
- cd 폴더명 -> 폴더이동

서버구축
npm - node package manager

- npm install -g express-generator
- express --view=ejs 모듈이름 -> views폴더안 확장자가 jade대신 ejs

npx - node package runner

- npx express-generator 모듈이름

서버 시작 명령 : npm run start
컨트롤+c : 서버종료

nodemon : 서버 종료하지 않고 자동으로 껐다켜줌
npm install -D nodemon
npm install -g nodemon

router.get('/ssac', function(req, res, next) {
res.json({ssac: 'love'});
});

router.get('/test', function(req, res, next) {
res.json({test: 'is_good'});
});

서버란

- 클라이언트
- 요청을 보내는 주체
- 브라우저, 데스크톱 프로그램, 모바일 앱, 다른 서버에 요청을 보내는 서버 등
- 서버
- 네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 컴퓨터 또는 프로그램
- 요청에 대한 응답만 하는 것이 아니고 다른 서버에 요청을 보낼 수도 있음

모듈

- 특정한 기능을 하는 함수나 변수들의 집합
- 자체로도 하나의 프로그램이면서 다른 프로그램의 부품으로 사용할 수 있음
- 모듈로 만들어두면 해당 모듈 재사용할 수 있음

모듈 만들기

- module.exports = 모듈로 만들 것
- 방법1
  function funcA(){...}
  module.exports=funcA;
- 방법2
  module.exports={
  funcA:()=>{...},
  funcB:()=>{...}
  }

ex) 중복된문자 제거
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

홀수짝수 - const stringModule = (num) => {
if (num)
}

HTTP

- TCP와 UDP, IP 프로토콜 사용
- 80번 포트 사용
- 연결상태를 유지하지 않음
- 전산 자원이 적게 들지만 클라이언트 구분이 힘듦
- 요청이 많아질 경우 또 다른 문제 발생 -> 쿠키, 세션, 토큰 등을 이용해 단점 해소

contnet-type

- application/json -> json객체 데이터(주로 응답 보낼 때)
- application/x-www-form-urlencoded ->html form data(주로 request 받을 때)
- multipart/form-data -> xml데이터(사진, 데이터 전송 받을 때)

express

- HTTP 요청에 대해 라우팅 및 미들웨어 기능 제공
- 라우팅: 서버 경로제어, 통신 데이터를 보낼 경로 선택
- 미들웨어: 부가적인 기능이나 처리를 제공하는 목적
- 기존 메소드+편리한 메소드 추가해서 기능 보완
- 설치: npm install express -g

/bin/www

- 서버를 실행하는 스크립트
- 포트번호를 바꿀 수 있음

/routes

- 페이지 라우팅과 관련된 파일 저장
- 1,2,8 line
  라우터 단위로 request발생하면 실행

/app.js
라우팅의 시작점

request처리

- request parameter
  - req.query: url에서의 query문자열
    - ex) url/?str=HelloNode -> req.query.str="HelloNode"
  - req.params: url에서 변수로 넘어온 것
    - ex) url/:idx로 지정 후 url/1024 접속 -> req.params.idx=1024
  - req.body:body로 넘어온 값
  - req.file:파일을 전송 받았을 때

router.get("/", (req, res) => {
res.status(200).json({
message: "조회 성공",
});
});

// /qqqq/?name=lee&age=29&like=kimchi

router.get("/qqqq", (req, res) => {
const { name, age, like } = req.query; // {name:'lee', age:'29', like: 'kimchi'}

console.log(`like: ${like}, age: ${age}, name: ${name}`);
});

// params
router.get("/:id", (req, res) => {
const { is } = req.params;
if (id === "0") {
// id 값이 0 일 때
res.status(404).json({
message: "해당 게시물이 존재하지 않습니다.",
});
} else {
// id 값이 그 외일 때
res.status(200).json({
message: "게시물 조회 성공",
});
}
});
