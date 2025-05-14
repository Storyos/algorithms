const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, S;
let arr;

rl.on("line", (input) => {
  if (lc === 0) {
    [N, S] = input.split(" ").map(Number);
  } else {
    arr = input.split(" ").map(Number);
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  let prefix = new Array(N + 1).fill(0);
  prefix[0] = 0;
  for (let i = 1; i <= arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i - 1];
  }
  // Two Pointer의 left right :  무조건 누적합 배열의 시작지점과 끝 지점
  // sum  = arr[right]-arr[left]
  // 정렬이 안되어있기 때문에 right를 내릴지 left를 내릴지
  let minLen = Infinity;
  let left = 0;
  let right = arr.length;
  for (let a of arr) {
    if (a >= S) {
      console.log(1);
      return;
    }
  }
  while (left < right && left <= N && right <= N) {
    let sum = prefix[right] - prefix[left];
    let len = right - left;
    if (sum >= S) {
      minLen = Math.min(len, minLen);
      right--;
    } else {
      left++;
      right = left + minLen + 1 >= N ? N : left + minLen + 1;
    }
  }
  console.log(minLen === Infinity ? 0 : minLen);
});
