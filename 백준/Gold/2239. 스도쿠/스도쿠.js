const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];

rl.on("line", (input) => {
  arr.push(input.split("").map(Number));
  if (arr.length === 9) {
    rl.close();
  }
});
// 스도쿠에 0 이들어가있는부분을 메꾸기
rl.on("close", () => {
  sudoku(0, 0);
  //   for (let i = 0; i < 9; i++) {
  //     console.log(answer.slice(i * 9, i * 9 + 9));
  //   }

  function sudoku(x, y) {
    // 마지막까지 도착했을때
    if (x === 8 && y === 8) {
      if (arr[y][x] === 0) {
        let a = getCandidate(8, 8);
        arr[y][x] = a[0];
      }

      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += arr[i].reduce((acc, num) => (acc += num), 0);
      }

      if (sum === 45 * 9) {
        let str = "";
        for (let i = 0; i < 9; i++) {
          console.log(arr[i].join(""));
          str += arr[i].join("");
        }
        exit();
      }
      return;
    }
    // 아직 숫자를 안 넣은 곳일때

    if (arr[y][x] === 0) {
      let candidate = getCandidate(x, y);
      if (candidate.length > 0)
        for (let c of candidate) {
          arr[y][x] = c;
          if (x === 8) {
            sudoku(0, y + 1);
          } else {
            sudoku(x + 1, y);
          }
          arr[y][x] = 0;
        }
    }
    //이미 숫자가 있으면 바로 다음으로 이동
    else {
      if (x === 8) {
        sudoku(0, y + 1);
      } else {
        sudoku(x + 1, y);
      }
    }
  }

  function getCandidate(x, y) {
    let xSection = Math.floor(x / 3) * 3;
    let ySection = Math.floor(y / 3) * 3;
    const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    candidate[0] = -1;

    for (let sy = ySection; sy < ySection + 3; sy++) {
      for (let sx = xSection; sx < xSection + 3; sx++) {
        candidate[arr[sy][sx]] = -1;
      }
    }

    for (let i = 0; i < 9; i++) {
      candidate[arr[i][x]] = -1;
      candidate[arr[y][i]] = -1;
    }
    return candidate.filter((a) => a != -1);
  }
});
