const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N;
rl.on("line", (input) => {
  N = input.split("");
  rl.close();
});

rl.on("close", () => {
  let arr = new Array(10).fill(0);
  let isValid = 0;
  for (let num of N) {
    arr[num]++;
    isValid += Number(num);
  }
  if (arr[0] > 0 && isValid % 3 === 0) {
    console.log(N.sort((a, b) => b - a).join(""));
  } else {
    console.log("-1");
  }
});
