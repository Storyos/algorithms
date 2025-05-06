const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, E;
let k;
let songs = 0;
let arr = [];
let campfire = [];
rl.on("line", (input) => {
  if (lc === 0) {
    N = parseInt(input);
  } else if (lc === 1) {
    E = parseInt(input);
  } else {
    let tmp = new Array(N + 1).fill(0);
    let test = input.split(" ").map(Number);
    for (let i = 1; i < test.length; i++) {
      tmp[test[i]] = 1;
    }
    arr.push(tmp);
    if (arr.length === E) {
      rl.close();
    }
  }
  lc++;
});

rl.on("close", () => {
  let songidx = 0;
  let memberInfo = Array.from({ length: N + 1 }, () => new Set());
  for (let a of arr) {
    // 새로운 노래 만드는 날
    if (a[1] === 1) {
      songidx++;
      for (let i = 1; i < a.length; i++) {
        if (a[i] === 1) {
          memberInfo[i].add(songidx);
        }
      }
    }
    // 노래 공유하는 날
    else {
      let shareSet = new Set();
      for (let i = 1; i < a.length; i++) {
        //참가했으면
        if (a[i] === 1) {
          for (let song of memberInfo[i]) {
            shareSet.add(song);
          }
        }
      }
      for (let i = 1; i < a.length; i++) {
        if (a[i] === 1) {
          for (let s of shareSet.values()) {
            memberInfo[i].add(s);
          }
        }
      }
    }
  }
  for (let i = 1; i < memberInfo.length; i++) {
    if (memberInfo[i].size === songidx) {
      console.log(i);
    }
  }
});
