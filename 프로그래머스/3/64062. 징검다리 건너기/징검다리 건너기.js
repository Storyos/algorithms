function solution(stones, k) {
  if (stones.length < k) return 0;

  const deque = [];
  let front = 0;
  let minValue = 200000000;

  for (let i = 0; i < stones.length; i++) {
    while (deque.length > front && stones[deque[deque.length - 1]] <= stones[i]) {
      deque.pop();
    }

    deque.push(i);

    if (deque[front] <= i - k) {
      front++;
    }

    if (i >= k - 1) {
      minValue = Math.min(minValue, stones[deque[front]]);
    }
  }

  return minValue;
}