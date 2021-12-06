const moduleArr = [7, 2, "Hello World", 11, "node", "server", 8, 1];

function sqrt(num){
    let cnt = 0;
    while(true) {
        if (num % 2 == 0){
            num = n/2;
            cnt += 1;
        } else break;
    } 
    return cnt;
}

function reverseStr(str) {
    // 안녕
    // ("안", "녕")
    // ("녕", "안")
    // 녕안
    return str.split("").reverse().join("");
}

for (let i = 0; i<moduleArr.length, i++) {
    if (typeof moduleArr[i]) === "string" {
        console.log(reverse(arr[i]));
    } else {
        if (moduleArr[i] % 2 ==0) {}
    }
}