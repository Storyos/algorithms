const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let N, M;
let arr;

rl.on("line", (input) => {
  if (lc === 0) {
    [N, M] = input.split(" ").map(Number);
  } else {
    arr = input.split(" ").map(Number);
    if (arr.length === N) {
      rl.close();
    }
  }
  lc++;
});

rl.on("close", () => {
  arr.sort((a, b) => a - b);
  let bucket = [];
  let resultSet = new Set();
  let visited = new Array(N).fill(false);
  comb(bucket, 0, M);
  let res = [...resultSet];
  for (let r of res) {
    console.log(r);
  }

  function comb(bucket, count, r) {
    if (count === r) {
      resultSet.add([...bucket].join(" "));
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
          bucket.push(arr[i]);
          visited[i] = true;
          comb(bucket, count + 1, r);
          bucket.pop();
          visited[i] = false;
        }
      }
    }
  }
});
