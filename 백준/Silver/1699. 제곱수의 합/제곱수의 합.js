const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N;
rl.on("line", (input) => {
  N = Number(input);
  rl.close();
});

rl.on("close", () => {
  let jegop = getJegopList();
  let dp = new Array(N + 1).fill(Infinity);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= N; i++) {
    if (Math.floor(Math.sqrt(i)) === Math.sqrt(i)) {
      dp[i] = 1;
    } else {
      for (let j = 0; j < jegop.length && jegop[j] <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - jegop[j]] + dp[jegop[j]]);
      }
    }
  }
  console.log(dp[N]);
  function getJegopList() {
    let tmp = [];
    for (let i = 1; i <= Math.sqrt(N); i++) {
      tmp.push(Math.pow(i, 2));
    }
    return tmp;
  }
});
