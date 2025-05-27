const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let n, k;
let rank = [];
let kinfo = "";
rl.on("line", (input) => {
  if (lc === 0) {
    [n, k] = input.split(" ").map(Number);
  } else {
    rank.push(input.split(" ").map(Number));
    if (rank.length === n) rl.close();
  }
  lc++;
});

rl.on("close", () => {
  rank.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[2] === b[2]) return b[3] - a[3];
      return b[2] - a[2];
    }
    return b[1] - a[1];
  });
  for (let i = 0; i < rank.length; i++) {
    if (rank[i][0] === k) {
      let [g, s, b] = [rank[i][1], rank[i][2], rank[i][3]];
      for (let j = 0; j <= i; j++) {
        let [tg, ts, tb] = [rank[j][1], rank[j][2], rank[j][3]];
        if (g === tg && s === ts && b === tb) {
          console.log(j + 1);
          return;
        }
      }
    }
  }
});
