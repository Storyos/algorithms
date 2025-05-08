const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 각 숫자 i의 가격은 P -> 문방구에서 같은 숫자를 여러 개 구매가능
// 문방구에서 파는 숫자의 종류 0 ~ N-1 : N개
// 각 숫자 i의 가격 P.
// M 현재 들고있는 돈

let lc = 0;
let prices;
let n, m;
rl.on("line", (input) => {
  if (lc === 0) {
    n = Number(input);
  } else if (lc === 1) {
    prices = input.split(" ").map((num, idx) => {
      return [idx, parseInt(num)];
    });
  } else {
    m = Number(input);
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  prices.sort((a, b) => {
    if (a[1] != b[1]) return a[1] - b[1];
    return b[0] - a[0];
  });
  let tmp = [];
  tmp.push(prices[0]);
  for (let i = 1; i < prices.length; i++) {
    if (tmp[tmp.length - 1][0] > prices[i][0]) {
      continue;
    }
    tmp.push(prices[i]);
  }

  let dp = Array.from({ length: m + 1 }, () => []);
  //dp[n] : n의 잔액이 있을때 최고로 얻을수 있는 숫자.
  dp[tmp[0][1]] = [tmp[0][0]];

  for (let i = tmp[0][1]; i <= m; i++) {
    for (let j = 0; j < tmp.length; j++) {
      if (i >= tmp[j][1]) {
        if (cal(dp[i]) <= cal([tmp[j][0], ...dp[i - tmp[j][1]]])) {
          dp[i] = [tmp[j][0], ...dp[i - tmp[j][1]]];
        }
      }
    }
  }
  let answer = dp[m].sort((a, b) => b - a).join("");
  if (answer[0] === "0") {
    console.log("0");
    return;
  } else {
    console.log(answer);
    return;
  }

  function cal(marr) {
    let data = marr.sort((a, b) => b - a).join("");
    return Number(data);
  }
});
