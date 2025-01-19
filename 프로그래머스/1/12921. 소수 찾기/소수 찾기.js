function solution(n) {
  let arr = Array(n + 1).fill(true).fill(false, 0, 2)

  // i : n의 제곱근까지 loop
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
    var s = arr.reduce((acc,num)=>acc=num?acc+1:acc);
    
  return s
}