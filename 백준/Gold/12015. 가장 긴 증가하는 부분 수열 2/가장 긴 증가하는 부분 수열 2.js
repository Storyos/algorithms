const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
let arr;
rl.on("line", (input) => {
  if (N === 0) {
    N = Number(input);
  } else {
    arr = input.split(" ").map(Number);
    rl.close();
  }
});

rl.on("close", () => {
  let list = [];
  let lstIdx = arr[0];
  list.push(arr[0]);

  for (let i = 1; i < N; i++) {
    // 증가한다면 !
    if (arr[i] > lstIdx) {
      list.push(arr[i]);
    } else {
      //이분탐색해서 넣을 자리
      let left = 0;
      let right = list.length - 1;
      let middle;
      while (left < right) {
        middle = Math.floor((left + right) / 2);
        if (list[middle] < arr[i]) {
          left = middle + 1;
        } else {
          right = middle;
        }
      }
      list[right] = arr[i];
    }
    lstIdx = list[list.length - 1];
  }

  console.log(list.length);
});
