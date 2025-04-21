const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T;
let lc = 0;
let answer = [];
rl.on("line", (input) => {
  if (lc === 0) {
    T = Number(input);
  } else {
    let [start, end] = input.split(" ").map(Number);
    const d = end - start;
    const n = Math.floor(Math.sqrt(end - start));
    if (d === n * n) {
      console.log(2 * n - 1);
    } else if (d <= n * n + n) {
      console.log(2 * n);
    } else {
      console.log(2 * n + 1);
    }
    if (T === lc) {
      rl.close();
    }
  }
  lc++;
});

