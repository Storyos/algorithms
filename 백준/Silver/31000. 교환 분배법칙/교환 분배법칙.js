const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var n = 0;
rl.on("line", (input) => {
  if (n === 0) {
    n = Number(input);
    rl.close();
  }
});
rl.on("close", () => {
  var answer = 0;

  for (var i = -n; i <= n; i++) {
    for (var j = -n; j <= n; j++) {
      if (i!=0&&i + j >= -n + 1 && i + j <= n + 1) {
        answer++;
      }
    }
  }
  console.log(answer+Math.pow(2*n+1,2));
});
