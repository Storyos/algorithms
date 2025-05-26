const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let N;
let M;
let busInfo;
rl.on("line", (input) => {
  if (lc === 0) {
    N = Number(input);
    busInfo = Array.from(Array(N + 1), () => new Array(N + 1).fill(Infinity));
  } else if (lc === 1) {
    M = Number(input);
  } else {
    let [from, to, cost] = input.split(" ").map(Number);
    busInfo[from][to] = Math.min(busInfo[from][to], cost);
    if (lc === M + 1) rl.close();
  }
  lc++;
});

rl.on("close", () => {
  for (let i = 0; i <= N; i++) busInfo[i][i] = 0;

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        busInfo[i][j] = Math.min(busInfo[i][j], busInfo[i][k] + busInfo[k][j]);
      }
    }
  }
  let answer;
  for (let i = 1; i < busInfo.length; i++) {
    let line = [];
    for (let j = 1; j < busInfo.length; j++) {
      if (isFinite(busInfo[i][j])) {
        line.push(busInfo[i][j]);
      } else {
        line.push(0);
      }
    }
    console.log(line.join(" "));
  }
});
