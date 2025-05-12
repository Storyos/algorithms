const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N;
let points = [];
rl.on("line", (input) => {
  if (lc === 0) {
    N = Number(input);
  } else {
    points.push(input.split(" ").map(Number));
    if (points.length === N) {
      rl.close();
    }
  }
  lc++;
});

rl.on("close", () => {
  // 다각형을 이루는 순서대로 진행됨 -> 그다음께 크면 시계방향
  let f1 = 0;
  let f2 = 0;
  for (let i = 0; i < N; i++) {
    f1 += points[i][0] * points[(i + 1) % N][1];
    f2 += points[(i + 1) % N][0] * points[i][1];
  }
  let result = Math.abs(f2 - f1) / 2.0;
  console.log(result.toFixed(1));
});
