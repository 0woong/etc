function one(str) {
  const stringArr = str.split(""); // [a,p,p,l,e]
  const uniqueArr = [];
  stringArr.forEach((item) => {
    if (uniqueArr.includes(item)) {
      uniqueArr.push(item);
    } // [a, p, l, e]
  });
}
module.export = string;
