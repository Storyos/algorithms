const readline = require("readline");
const { start } = require("repl");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var tc = 0;
var lc = 0;
var N, K;
var duration;
var workMap;
var t = 0;
var answer = [];
rl.on("line", (input) => {
  if (tc === 0) {
    tc = Number(input);
  } else {
    if (lc === 0) {
      [N, K] = input.split(" ").map(Number);
      workMap = new Map();
      lc++;
    } else if (lc === 1) {
      duration = input.split(" ").map(Number);
      lc++;
    } else if (lc <= K + 1) {
      var [from, to] = input.split(" ").map(Number);
      if (workMap.has(to)) {
        workMap.set(to, [...workMap.get(to), from]);
      } else {
        workMap.set(to, [from]);
      }
      lc++;
    } else {
      var W = Number(input);
      var dp = new Array(N + 1).fill(-1);
      answer.push(startWork(W, 0));
      function startWork(number) {
        if (dp[number] !== -1) return dp[number];
        if (!workMap.has(number)) {
          dp[number] = duration[number - 1];
          return dp[number];
        } else {
          var max = -1;
          for (var a of workMap.get(number)) {
            max = Math.max(max, startWork(a));
          }
          dp[number] = max + duration[number - 1];
          return dp[number];
        }
      }
      t++;
      lc = 0;
      if (t === tc) rl.close();
    }
  }
});

rl.on("close", () => {
  for (var a of answer) {
    console.log(a);
  }
});
