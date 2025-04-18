const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var n = 0;
var lc = 0;
var fMap = [];

rl.on("line", (input) => {
  if (lc === 0) {
    n = Number(input);
  } else {
    fMap.push(input.split(""));
    if (lc === n) rl.close();
  }
  lc++;
});

rl.on("close", () => {
  var max = 0;
  for (var i = 0; i < n; i++) {
    var point = 0;
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        if (i != j && isFriend(j, k) && isFriend(i, k) && fMap[i][j] != "Y") {
          fMap[i][j] = "C";
          fMap[j][i] = "C";
          break;
        }
      }
    }
  }

  for (var i = 0; i < n; i++) {
    var point = fMap[i].filter((a) => a != "N").length;
    max = Math.max(point, max);
  }
  console.log(max);

  function isFriend(from, to) {
    if (from != to && fMap[from][to] === "Y") return true;
    return false;
  }
});
