const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let str1, str2;
rl.on("line", (input) => {
  if (lc === 0) {
    str1 = input;
  } else {
    str2 = input;
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
  let maxLen = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      maxLen = Math.max(dp[i][j], maxLen);
    }
  }
  console.log(maxLen);
});
