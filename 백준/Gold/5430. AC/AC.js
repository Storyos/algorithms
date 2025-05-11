const readline = require("readline");
const { deflateSync } = require("zlib");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// R : Reverse (뒤집기)
// D : Dismiss (버리기) -> 첫번째 수를 버리는 것

let lc = 0,
  tc = 0;
let T, N, cmd, arr;
let data = [];
rl.on("line", (input) => {
  if (lc === 0) {
    T = Number(input);
  } else {
    if (tc === 0) {
      cmd = input.split("");
      tc++;
    } else if (tc === 1) {
      tc++;
      N = Number(input);
    } else {
      arr = input;
      data.push([cmd, N, arr]);
      tc = 0;
    }
    if (data.length === T) rl.close();
  }
  lc++;
});

rl.on("close", () => {
  for (let [command, num, arr] of data) {
    let newNumArr;
    newNumArr = num > 0 ? 배열처리(arr) : [];
    let result = 커맨드처리(command, newNumArr);
    if (!result) {
      console.log("error");
    } else {
      console.log(`[${result.join(",")}]`);
    }
  }

  function 커맨드처리(command, newNumArr) {
    let isLeft = true;
    let leftCount = 0,
      rightCount = 0;
    let tmp = [...newNumArr];
    for (let c of command) {
      if (c === "R") {
        isLeft = !isLeft;
      } else if (c === "D") {
        if (tmp.length > leftCount + rightCount) {
          isLeft ? leftCount++ : rightCount++;
        } else {
          return false;
        }
      }
    }
    tmp = tmp.slice(leftCount, tmp.length - rightCount);

    return isLeft ? tmp : tmp.reverse();
  }

  function 배열처리(arr) {
    return arr
      .substring(1, arr.length - 1)
      .split(",")
      .map(Number);
  }
});
