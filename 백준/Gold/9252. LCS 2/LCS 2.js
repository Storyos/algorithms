const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let str1, str2;
rl.on("line", (input) => {
  if (lc === 0) {
    str1 = input.split("");
  } else {
    str2 = input.split("");
    rl.close();
  }
  lc++;
}).on("close", () => {
  //최장 공통 부분 배열..
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(""));
  let maxLen = 0;
  let LCS = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
      } else {
        if (dp[i - 1][j].length > dp[i][j - 1].length) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 1];
        }
      }
      if (dp[i][j].length > maxLen) {
        maxLen = dp[i][j].length;
        LCS = dp[i][j];
      }
    }
  }
  console.log(maxLen);
  console.log(LCS);
});
