const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, arr;

rl.on("line", (input) => {
  if (lc === 0) {
    N = Number(input);
  } else {
    arr = input.split(" ").map(Number);
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  let max = Infinity;
  let maxD;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (Math.abs(sum) < max) {
      max = Math.abs(sum);
      maxD = [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else if (sum === 0) {
      break;
    } else {
      left++;
    }
  }

  console.log(maxD[0], maxD[1]);
});
