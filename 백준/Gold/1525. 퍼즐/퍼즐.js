const { count } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let puzzle = "";
rl.on("line", (input) => {
  puzzle += input.split(" ").join("");
  if (puzzle.length === 9) {
    rl.close();
  }
});
// 먼저 풀수없는 형태

/* 이상적 퍼즐
1 2 3 4 5 6 7 8 0
*/

rl.on("close", () => {
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let isValid = checkImpossible();
  if (isValid) console.log(-1);
  else {
    let visited = new Map();
    visited.set(puzzle, 0);
    let queue = [];
    queue.push(puzzle);
    let queueIdx = 0;
    while (queue.length > 0) {
      let tmp = queue[queueIdx];
      let count = visited.get(tmp);
      queueIdx++;

      if (tmp === "123456780") {
        console.log(count);
        return;
      }
      let zero = tmp.indexOf("0");
      let y = Math.floor(zero / 3);
      let x = zero % 3;
      count++;
      for (let i = 0; i < 4; i++) {
        let ny = y + dir[i][0];
        let nx = x + dir[i][1];
        if (nx >= 0 && nx <= 2 && ny >= 0 && ny <= 2) {
          let nzero = ny * 3 + nx;
          let nPuzzle = swap(tmp, zero, nzero);
          if (!visited.has(nPuzzle)) {
            visited.set(nPuzzle, count);
            queue.push(nPuzzle);
          }
        }
      }
    }
    return -1;
  }

  function checkImpossible() {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = i + 1; j < 9; j++) {
        if (puzzle[i] != "0" && puzzle[j] != "0") {
          if (puzzle[i] > puzzle[j]) count++;
        }
      }
    }
    return count % 2 === 0 ? false : true;
  }
  function swap(str, idx1, idx2) {
    const arr = str.split("");
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr.join("");
  }
});
