const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let [n, m] = [0, 0];
let lc = 0;
let baseArr = [];
let goalArr = [];
rl.on("line", (input) => {
  if (n === 0) {
    [n, m] = input.split(" ").map(Number);
  } else if (lc <= n) {
    baseArr.push(input.split("").map(Number));
  } else {
    goalArr.push(input.split("").map(Number));
    if (goalArr.length === n) rl.close();
  }
  lc++;
});
rl.on("close", () => {
  var count = 0;
  for (var i = 0; i <= n - 3; i++) {
    for (var j = 0; j <= m - 3; j++) {
      if (baseArr[i][j] != goalArr[i][j]) {
        getReverse(i, j);
        count++;
      }
    }
  }
  for (var i = 0; i < n; i++) {
    if (goalArr.join("") != baseArr.join("")) {
      console.log("-1");
      return;
    }
  }
  console.log(count);

  function getReverse(x, y) {
    for (var i = x; i < x + 3; i++) {
      for (var j = y; j < y + 3; j++) {
        baseArr[i][j] = baseArr[i][j] === 0 ? 1 : 0;
      }
    }
  }
});
