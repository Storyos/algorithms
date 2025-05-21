const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
let arr;
rl.on("line", (input) => {
  if (N === 0) {
    N = Number(input);
  } else {
    arr = input.split(" ").map(Number);
    rl.close();
  }
});

rl.on("close", () => {
  let dp = new Array(N).fill(0);
  dp[0] = 1;
  let answer = 0;
  for (let i = 0; i < N; i++) {
    let max = 0;
    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
    answer = Math.max(dp[i], answer);
  }
  console.log(answer);
});
