const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let N, d, k, c;
let sushi = [];
rl.on("line", (input) => {
  if (lc === 0) {
    [N, d, k, c] = input.split(" ").map(Number);
  } else {
    sushi.push(Number(input));
    if (sushi.length === N) rl.close();
  }
  lc++;
}).on("close", () => {
  //가장 다양한 종류의 초밥을 먹을수있게 연속
  //즉 k길이의 부분수열+c 중에서 가장 긴 것
  //sliding Window
  let answer = 0;
  let bucket = new Map();
  //init (0 ~ k-1 까지의 스시를 먹은것)
  for (let i = 0; i < k; i++) {
    bucket.set(sushi[i], bucket.get(sushi[i]) + 1 || 1);
  }
  bucket.set(c, bucket.get(c) + 1 || 1);
  //left와 right를 구분해두면 더 좋을듯
  //left를 i로 두고 right를 i+k-1로 두기
  answer = Math.max(answer, bucket.size);
  for (let i = 1; i < N; i++) {
    let left = (i - 1) % N;
    let right = (i + k - 1) % N;
    deleteBucket(left);
    bucket.set(sushi[right], bucket.get(sushi[right]) + 1 || 1);
    answer = Math.max(answer, bucket.size);
  }
  console.log(answer);
  function deleteBucket(idx) {
    bucket.set(sushi[idx], bucket.get(sushi[idx]) - 1);
    if (bucket.get(sushi[idx]) === 0) {
      bucket.delete(sushi[idx]);
    }
  }
  //원형은 sushi[i%N] 로 해결
});
