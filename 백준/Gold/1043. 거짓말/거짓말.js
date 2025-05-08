const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let n, m, knowNum;
let knowMember = [];
let partyMember = [];
let canknow;
rl.on("line", (input) => {
  if (lc === 0) {
    [n, m] = input.split(" ").map(Number);
    canknow = Array.from({ length: n + 1 }, () => new Set());
  } else if (lc === 1) {
    let tmp = input.split(" ").map(Number);
    knowNum = tmp[0];
    tmp.shift();
    if (knowNum > 0) {
      knowMember = tmp;
    }
  } else {
    let tmp = input.split(" ").map(Number);
    tmp.shift();
    for (let i = 0; i < tmp.length; i++) {
      for (let j = 0; j < tmp.length; j++) {
        if (i != j) {
          canknow[tmp[i]].add(tmp[j]);
        }
      }
    }

    partyMember.push(tmp);
    if (partyMember.length === m) rl.close();
  }
  lc++;
});

rl.on("close", () => {
  let answer = 0;
  let knows = new Array(n + 1).fill(false);
  let visited = new Array(n + 1).fill(false);
  for (let mem of knowMember) {
    checkvisited(mem);
  }
  for (let party of partyMember) {
    let valid = true;
    for (let i = 0; i < party.length; i++) {
      if (knows[party[i]]) {
        valid = false;
        break;
      }
    }
    if (valid) answer++;
  }
  console.log(answer);
  function checkvisited(n) {
    knows[n] = true;
    visited[n] = true;
    let meets = [...canknow[n].values()];
    for (let meet of meets) {
      knows[meet] = true;
      if (!visited[meet]) checkvisited(meet);
    }
  }
});
