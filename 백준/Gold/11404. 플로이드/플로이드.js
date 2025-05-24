const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let n, m;
let busInfo = [];
rl.on("line", (input) => {
  if (lc === 0) {
    n = Number(input);
    busInfo = Array.from(Array(n + 1), () => new Array(n + 1).fill(Infinity));
    for (let i = 0; i <= n; i++) busInfo[i][i] = 0;
  } else if (lc === 1) {
    m = Number(input);
  } else {
    let [from, to, cost] = input.split(" ").map(Number);
    busInfo[from][to] = Math.min(cost, busInfo[from][to]);
    // busInfo[to][from] = Math.min(cost, busInfo[to][from]);
    if (lc === m + 1) rl.close();
  }
  lc++;
});

rl.on("close", () => {
  //i에서 j = i에서 k + k에서 j
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        busInfo[j][k] = Math.min(busInfo[j][i] + busInfo[i][k], busInfo[j][k]);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    let tmp = [];
    for (let j = 1; j <= n; j++) {
      busInfo[i][j] = isFinite(busInfo[i][j]) ? busInfo[i][j] : 0;
      tmp.push(busInfo[i][j]);
    }
    console.log(tmp.join(" "));
  }
});
