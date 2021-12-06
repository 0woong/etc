const { resolve } = require("path/posix");

const promise1 = function (condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      // 실행
      resolve("참인 조건");
    } else {
      // 에러
      reject("거짓인 조건");
    }
  });
};

// promise 실행
promise1(condition).then(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error);
  }
);

const promiseChain1 = (params) => {
  return new Promise((resolve, reject) => {
    console.log("func1");
    setTimeout(() => {
      resolve("func1");
    }, 1000);
  });
};

const promiseChain2 = (params) => {
  return new Promise((resolve, reject) => {
    console.log("func2");
    setTimeout(() => {
      reject(new Error(`func 2 failed : ${params}`));
    }, 1000);
  });
};

const promiseChain3 = (params) => {
  return new Promise((resolve, reject) => {
    console.log("func3");
    setTimeout(() => {
      resolve(`func 3 success: ${params}`);
    }, 1000);
  });
};

promiseChain1("start")
  .then(promiseChain2)
  .then(promiseChain3)
  .catch((error) => console.log(error));

let asyncFunction1 = (message) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("func1", message);
      resolve("func1");
    }, 1000);
  });

let asyncFunction2 = (message) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("func2", message);
      resolve("func2");
    }, 500);
  });

function notAsyncMain() {
  asyncFunction1("hello")
    .then((data) => {
      console.log(data);
      return asyncFunction2("world");
    })
    .then((data) => {
      console.log(data);
    });
}
// 위아래 같은 결과
async function notAsyncMain() {
  let data = await asyncFunction1("hello");
  console.log(data);
  data = await asyncFunction2("node");
  console.log(data);
}
