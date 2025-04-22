const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let L, C;
let starr = [];
rl.on("line", (input) => {
  if (lc === 0) {
    [L, C] = input.split(" ").map(Number);
  } else {
    starr = input.split(" ");
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  let mo = [];
  let ja = [];
  for (let c of starr) {
    if ("aeiou".includes(c)) {
      mo.push(c);
    } else {
      ja.push(c);
    }
  }
  let tmp = [];
  let answer = [];
  combination(tmp, -1, 0, L);
  answer.sort((a, b) => a.localeCompare(b));
  for (var a of answer) {
    console.log(a);
  }

  function combination(arr, start, count, r) {
    if (count === r) {
      let mocount = 0;
      let jacount = 0;
      let res = [...arr].sort().join("");
      for (let i = 0; i < res.length; i++) {
        if ("aeiou".includes(res[i])) {
          mocount++;
        } else {
          jacount++;
        }
      }
      if (mocount >= 1 && jacount >= 2) {
        answer.push(res);
        return;
      }
    } else {
      for (let i = start + 1; i < C; i++) {
        arr.push(starr[i]);
        combination(arr, i, count + 1, r);
        arr.pop();
      }
    }
  }
});
