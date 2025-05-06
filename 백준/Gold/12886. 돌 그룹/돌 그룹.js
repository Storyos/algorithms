const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr;
rl.on("line", (input) => {
  arr = input.split(" ").map(Number);
  rl.close();
});
// 1<=A,B,C <= 500
rl.on("close", () => {
  const sum = arr.reduce((acc, n) => (acc += n), 0);
  if (sum % 3 != 0) {
    console.log(0);
    return;
  }
  let queue = [];
  arr.sort((a, b) => a - b);
  queue.push([arr[0], arr[1], arr[2]]);
  let cnt = 0;
  while (queue.length > 0) {
    let [a, b, c] = queue[0];
    queue.shift();
    cnt++;
    if (cnt >= 50000) {
      console.log(0);
      return;
    }
    if (a < 1 || b < 1 || c < 1) continue;
    if (a === b && b == c) {
      console.log(1);
      return;
    } else {
      let na = a;
      let nb = b;
      if (nb > na) {
        nb -= na;
        na += na;
      } else {
        na -= nb;
        nb += nb;
      }
      if (validCheck(na, nb, c)) queue.push([na, nb, c]);

      let na2 = a;
      let nc = c;
      if (na2 < nc) {
        nc -= na2;
        na2 += na2;
      } else {
        na2 -= nc;
        nc += nc;
      }
      if (validCheck(na2, b, nc)) queue.push([na2, b, nc]);

      let nb2 = b;
      let nc2 = c;
      if (nb2 < nc2) {
        nc2 -= nb2;
        nb2 += nb2;
      } else {
        nb2 -= nc2;
        nc2 += nc2;
      }
      if (validCheck(a, nb2, nc2)) queue.push([a, nb2, nc2]);
    }
  }
  console.log(0);
  return;
  function validCheck(a, b, c) {
    let tmp = [a, b, c];
    tmp.sort((a, b) => a - b);
    if (a < 1 || b < 1 || c < 1) return false;
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] != arr[[i]]) {
        return true;
      }
    }
    return false;
  }
});
