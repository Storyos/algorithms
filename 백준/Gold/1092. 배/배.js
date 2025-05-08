const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, M;
let limits = [];
let weights = [];
rl.on("line", (input) => {
  if (lc === 0) {
    N = Number(input);
  } else if (lc === 1) {
    limits = input.split(" ").map(Number);
  } else if (lc === 2) {
    M = Number(input);
  } else {
    weights = input.split(" ").map(Number);
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  limits.sort((a, b) => b - a);
  weights.sort((a, b) => b - a);
  for (let w of weights) {
    if (limits[0] < w) {
      console.log("-1");
      return;
    }
  }
  let time = 0;
  while (weights.length > 0) {
    weights.sort((a, b) => b - a);
    let tmpLimits = [...limits];
    time++;
    while (weights.length > 0) {
      let l = tmpLimits[0];
      let w = weights[0];
      if (l >= w) {
        tmpLimits.shift();
        weights.shift();
      } else if (tmpLimits.length <= 0) {
        break;
      } else {
        if (Math.max(...tmpLimits) < Math.min(...weights)) {
          break;
        }
        weights.push(weights.shift());
      }
    }
  }
  console.log(time);
});
