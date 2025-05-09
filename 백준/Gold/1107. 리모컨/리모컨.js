const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, M;
let brokenButtons = [];
rl.on("line", (input) => {
  if (lc === 0) {
    N = Number(input);
  } else if (lc === 1) {
    M = Number(input);
    if (M === 0) rl.close();
  } else {
    brokenButtons = input.split(" ").map(Number);

    rl.close();
  }
  lc++;
});
rl.on("close", () => {
  let minPress = Math.abs(N - 100);
  for (let i = 0; i <= 1000000; i++) {
    // 가능한 모든 번호 탐색
    let strNum = i.toString();
    let isValid = true;

    for (let j = 0; j < strNum.length; j++) {
      if (
        brokenButtons.length > 0 &&
        brokenButtons.includes(Number(strNum[j]))
      ) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      let pressCount = strNum.length + Math.abs(i - N);
      minPress = Math.min(minPress, pressCount);
    }
  }

  console.log(minPress);
});
