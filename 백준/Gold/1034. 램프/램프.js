const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, M, K;
let arr = [];

rl.on("line", (input) => {
  if (lc === 0) {
    [N, M] = input.split(" ").map(Number);
  } else if (lc <= N) {
    arr.push(input.split("").map(Number));
  } else {
    K = Number(input);
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  let map = new Map();
  for (let a of arr) {
    const zeroCount = a.filter((v) => v === 0).length;
    const key = a.join("");

    if (zeroCount <= K && (K - zeroCount) % 2 === 0) {
      map.set(key, (map.get(key) || 0) + 1);
    }
  }

  let max = 0;
  for (let val of map.values()) {
    max = Math.max(max, val);
  }

  console.log(max);
});
