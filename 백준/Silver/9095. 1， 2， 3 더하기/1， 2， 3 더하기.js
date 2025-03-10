const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let t = 0;
const arr = [];

rl.on("line", (input) => {
  if (lc === 0) {
    t = Number(input);
    lc++;
  } else if (lc <= t) {
    arr.push(Number(input));
    if(lc===t){
        rl.close();
    }
    lc++;
  } 
});
rl.on("close", () => {
    let dp = new Array(11).fill(0);
    dp[1]= 1;
    dp[2] =2;
    dp[3]= 4;
    for(let i=4; i<11; i++){
        dp[i]=dp[i-1]+dp[i-2]+dp[i-3];
    }
    for(let n of arr){
        console.log(dp[n]);   
    }
});
