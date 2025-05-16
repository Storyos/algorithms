const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N;
let arr;

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
  let max = 0;
  //Base Building
  for (let i = 0; i < arr.length; i++) {
    //Target Building
    let count = 0;

    //이건 base보다 앞에 있는것들만 체크한것.
    for (let j = i + 1; j < arr.length; j++) {
      let dy = arr[j] - arr[i];
      let dx = j - i;
      let isValid = true;
      for (let start = i + 1; start < j; start++) {
        let ddy = arr[start] - arr[i];
        let ddx = start - i;
        if (ddy * dx >= dy * ddx) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        count++;
      }
    }

    // 이건 base보다 뒤에 있는것들만 체크한것.
    for (let j = i - 1; j >= 0; j--) {
      let dy = arr[j] - arr[i];
      let dx = j - i;
      let isValid = true;
      for (let start = j + 1; start < i; start++) {
        let ddy = arr[start] - arr[i];
        let ddx = start - i;
        if (ddy * dx <= dy * ddx) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        count++;
      }
    }
    max = Math.max(count, max);
  }
  console.log(max);
});
