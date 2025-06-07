const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
let nums = [];

rl.on("line", (input) => {
  if (N == 0) {
    N = Number(input);
  } else {
    nums.push(input.split(" ").map(Number));
    if (nums.length === N) rl.close();
  }
}).on("close", () => {
  let answer = Infinity;
  for (let i = 1; i <= N; i++) {
    let arr = [];
    combination(arr, 0, 0, i);
  }
  console.log(answer);
  function combination(arr, start, count, r) {
    if (count === r) {
      let tmps = 1;
      let tmpb = 0;
      for (let [s, b] of arr) {
        tmps *= s;
        tmpb += b;
      }
      answer = Math.min(answer, Math.abs(tmps - tmpb));
    } else {
      for (let i = start; i < nums.length; i++) {
        arr.push(nums[i]);
        combination(arr, i + 1, count + 1, r);
        arr.pop();
      }
    }
  }
});
