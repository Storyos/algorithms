const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str;

rl.on("line", (input) => {
  str = input;
  rl.close();
});
rl.on("close", () => {
  str += " ";
  let answer = "";
  let isInTag = false;
  let tmp = "";
  for (let i = 0; i < str.length; i++) {
    if (isInTag) {
      if (str[i] === ">") {
        tmp += str[i];
        answer += tmp;
        tmp = "";
        isInTag = false;
      } else {
        tmp += str[i];
      }
    } else {
      if (str[i] === "<") {
        answer += tmp.split("").reverse().join("");
        tmp = str[i];
        isInTag = true;
      } else if (str[i] === " ") {
        answer += tmp.split("").reverse().join("") + " ";
        tmp = "";
      } else {
        tmp += str[i];
      }
    }
  }
  console.log(answer);
});
