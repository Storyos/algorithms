const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let c, n;
let data = [];

rl.on("line", (input) => {
  if (lc === 0) {
    [c, n] = input.split(" ").map(Number);
  } else {
    data.push(input.split(" ").map(Number));
    if (data.length === n) {
      rl.close();
    }
  }
  lc++;
}).on("close", () => {
  data.sort((a, b) => a[0] - b[0]);
  let dp = new Array(c + 1).fill(Infinity);
  dp[0] = 0;
  for (let [cost, customN] of data) {
    dp[customN]=Math.min(dp[customN],cost);
    for (let i = 1; i <= c; i++) {
      dp[i] =
        i < customN
          ? Math.min(dp[i], cost)
          : Math.min(dp[i], dp[customN] + dp[i - customN]);
    }
  }
  console.log(dp[c]);
});
