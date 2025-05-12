const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, M;
let arr = [];

rl.on("line", (input) => {
  if (lc === 0) {
    [N, M] = input.split(" ").map(Number);
  } else {
    arr.push(input.split("").map(Number));
    if (arr.length === N) {
      rl.close();
    }
  }
  lc++;
});
// i) 행과 열의 번호가 등차수열을 이루고 있어야 한다.

rl.on("close", () => {
  // M,N 이 주어졌을때 최대로 뽑을수 있는 개수:
  let max = -1;
  for (let dy = -N; dy <= N; dy++) {
    for (let dx = -M; dx <= M; dx++) {
      for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[0].length; x++) {
          let res = going(dy, dx, y, x);
          if (res === 0 || res % Math.sqrt(res) === 0) {
            max = Math.max(res, max);
          }
        }
      }
    }
  }
  console.log(max);

  function going(dy, dx, y, x) {
    let tmp = "";
    if (dx === 0 && dy === 0) return arr[y][x];
    while (x >= 0 && y >= 0 && x < arr[0].length && y < arr.length) {
      tmp += arr[y][x];
      isPerfect(tmp);
      y += dy;
      x += dx;
    }
    return Number(tmp);
  }
  function isPerfect(tmp) {
    tmp = Number(tmp);
    if (tmp === 0 || tmp % Math.sqrt(tmp) === 0) {
      max = Math.max(tmp, max);
    }
  }
});
