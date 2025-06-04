const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let S, T;
rl.on("line", (input) => {
  if (lc === 0) {
    S = input;
  } else {
    T = input;
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  // A를 추가 or 뒤집고 B를 추가
  // B가 시작되는 곳 부터

  while (T.length > S.length) {
    if (T[T.length - 1] === "A") {
      T = T.slice(0, -1);
    } else {
      T = T.slice(0, -1).split("").reverse("").join("");
    }
  }

  console.log(T === S ? 1 : 0);
});
