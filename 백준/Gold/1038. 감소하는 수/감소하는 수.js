const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N;
rl.on("line", (input) => {
  N = Number(input);
  rl.close();
});

rl.on("close", () => {
  let answer = [];
  for (let i = 0; i <= 10; i++) {
    let arr = [];
    combination(arr, -1, 0, i);
  }
  answer.sort((a, b) => a - b);
  if (N > 1022) console.log("-1");
  else console.log(answer[N + 1]);
  function combination(arr, start, count, r) {
    if (count === r) {
      let tmp = [...arr];
      tmp = tmp.sort((a, b) => b - a).join("");
      answer.push(Number(tmp));
      //그냥 감소하게 만들어서 넣으면됨
    } else {
      for (let i = start + 1; i < 10; i++) {
        arr.push(i);
        combination(arr, i, count + 1, r);
        arr.pop();
      }
    }
  }
});
