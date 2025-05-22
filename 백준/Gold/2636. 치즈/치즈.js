const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sero, garo;
let arr = [];
let lc = 0;

rl.on("line", (input) => {
  if (lc === 0) {
    [sero, garo] = input.split(" ").map(Number);
  } else {
    arr.push(input.split(" ").map(Number));
    if (arr.length === sero) rl.close();
  }
  lc++;
});

rl.on("close", () => {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let time = 0;
  let lastCount = 0;

  const isIn = (y, x) => y >= 0 && x >= 0 && y < sero && x < garo;
  while (true) {
    const visited = Array.from({ length: sero }, () => Array(garo).fill(false));

    // 외부공기 탐색 (0,0)부터 BFS
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length) {
      const [y, x] = queue.shift();
      for (let [dy, dx] of dir) {
        const ny = y + dy;
        const nx = x + dx;
        if (isIn(ny, nx) && !visited[ny][nx]) {
          if (arr[ny][nx] === 0) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
          } else if (arr[ny][nx] === 1) {
            // 치즈가 외부 공기와 맞닿은 경우
            visited[ny][nx] = true;
            arr[ny][nx] = 2; // 녹일 표시
          }
        }
      }
    }

    let melted = 0;

    // 표시된 치즈 녹이기
    for (let i = 0; i < sero; i++) {
      for (let j = 0; j < garo; j++) {
        if (arr[i][j] === 2) {
          arr[i][j] = 0;
          melted++;
        }
      }
    }

    if (melted === 0) break; // 다 녹은 경우 종료

    lastCount = melted;
    time++;
  }

  console.log(time);
  console.log(lastCount);
});
