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
  //연속된 소수의 합으로 나타내는것
  let prime = getPrime()
    .map((v, i) => (v ? i : 0))
    .filter((e) => e);
  let acc = [];
  acc[0] = 0;
  for (let i = 1; i < prime.length; i++) {
    acc[i] = acc[i - 1] + prime[i - 1];
  }
  let count = 0;
  if (prime[prime.length - 1] === N) count++;
  for (let base = 0; base < acc.length; base++) {
    let left = base;
    let right = acc.length - 1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      let target = acc[middle] - acc[base];
      if (target === N) {
        count++;
        break;
      } else if (target > N) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }
  console.log(count);
  function getPrime() {
    let arr = Array(N + 1)
      .fill(true)
      .fill(false, 0, 2);
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (arr[i]) {
        for (let j = i * i; j <= N; j += i) {
          arr[j] = false;
        }
      }
    }
    return arr;
  }
});
