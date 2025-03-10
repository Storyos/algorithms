const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const CharMap = new Map();
for (let i = 1; i <= 26; i++) {
  CharMap.set(String.fromCharCode(96 + i), 0);
}
let s = "";
rl.on("line", (input) => {
  s = input.split("");
  rl.close();
});

rl.on("close", () => {
  for (var c of s) {
    CharMap.set(c, CharMap.get(c) + 1);
  }
  let answer = [...CharMap.values()].join(' ');
  console.log(answer);
});
