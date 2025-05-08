const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let T;
let str = [];
rl.on("line", (input) => {
  if (lc === 0) {
    T = Number(input);
  } else {
    str.push(input);
    if (str.length === T) rl.close();
  }
  lc++;
});

rl.on("close", () => {
  for (let s of str) {
    let itEndsWith = 0;
    let isSuccess = "YES";
    while (s.length > 0) {
      //일단 01로 시작하면 그거 빼기
      if (s.substring(0, 2) === "01") {
        s = s.substring(2);
        itEndsWith = 2;
      }
      //100으로 시작하면
      else if (
        s.substring(0, 3) === "100" ||
        (itEndsWith === 1 && s.substring(0, 2) === "00")
      ) {
        if (s.substring(0, 2) === "00") {
          s = s.substring(2);
        } else s = s.substring(3);
        let tmpidx = 0;
        //100뒤에 0 중복되는거 자르기
        while (s[tmpidx] === "0") {
          tmpidx++;
        }
        s = s.substring(tmpidx);
        if (s.length < 1) {
          isSuccess = "NO";
          break;
        }
        //1중복되는거 자르기
        if (s[0] === "0") {
          isSuccess = "NO";
          break;
        }
        let oneidx = 0;

        while (s[oneidx] === "1") {
          oneidx++;
        }
        s = s.substring(oneidx);
        if (oneidx > 1) itEndsWith = 1;
        else itEndsWith = 0;
      } else {
        isSuccess = "NO";
        break;
      }
    }
    console.log(isSuccess);
  }
});
