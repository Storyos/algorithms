const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let V, E;
let map;
let ec = 0;
rl.on("line", (input) => {
  if (lc === 0) {
    [V, E] = input.split(" ").map(Number);
    map = Array.from(Array(V + 1), () => new Array(V + 1).fill(Infinity));
  } else {
    let [from, to, cost] = input.split(" ").map(Number);
    map[from][to] = cost;
    ec++;
    if (ec === E) {
      rl.close();
    }
  }
  lc++;
});

rl.on("close", () => {
  for (let i = 1; i < map.length; i++) map[i][i] = 0;
  for (let i = 1; i < map.length; i++) {
    for (let j = 1; j < map.length; j++) {
      for (let k = 1; k < map.length; k++) {
        map[i][k] = Math.min(map[i][j] + map[j][k], map[i][k]);
      }
    }
  }
  let min = Infinity;
  for (let i = 1; i < map.length; i++) {
    for (let j = 1; j < map.length; j++) {
      if (i != j) min = Math.min(min, map[i][j] + map[j][i]);
    }
  }
  console.log(min===Infinity?-1:min);
});
