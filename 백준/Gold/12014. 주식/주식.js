const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let tc;
let lc = 0;
let testcases = [];
let N, K;
rl.on("line", (input) => {
  if (lc === 0) {
    tc = Number(input);
  } else {
    if (lc === 1) {
      [N, K] = input.split(" ").map(Number);
    } else {
      let tmp = input.split(" ").map(Number);
      testcases.push([N, K, tmp]);
      if (testcases.length === tc) rl.close();
      else lc = 0;
    }
  }
  lc++;
});

rl.on("close", () => {
  //일단 하나만 생각
  for (let test = 0; test < tc; test++) {
    let [RN, RK] = [testcases[test][0], testcases[test][1]];

    let stockInfo = testcases[test][2];
    let length = new Array(N);
    for (let k = 0; k < RN; k++) {
      length[k] = 1;
      for (let i = 0; i < k; i++) {
        if (stockInfo[i] < stockInfo[k]) {
          length[k] = Math.max(length[k], length[i] + 1);
        }
      }
    }
    length.sort((a, b) => b - a);
    console.log(`Case #${test + 1}`);
    console.log(length[0] >= RK ? 1 : 0);
  }
});
