class Interval {
  constructor(length) {
    this.length = length; // 구간 전체 길이
    this.count = 0;       // 이 구간에 추가된 휴게소 수 (기본값: 0)
  }

  // 현재 이 구간이 count + 1 개로 분할되었을 때 가장 긴 부분 구간의 길이
  get maxGap() {
    return Math.ceil(this.length / (this.count + 1));
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx].maxGap > this.heap[parentIdx].maxGap) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else break;
    }
  }

  poll() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let largest = idx;

      if (
        left < length &&
        this.heap[left].maxGap > this.heap[largest].maxGap
      ) {
        largest = left;
      }

      if (
        right < length &&
        this.heap[right].maxGap > this.heap[largest].maxGap
      ) {
        largest = right;
      }

      if (largest === idx) break;

      this.swap(idx, largest);
      idx = largest;
    }
  }

}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M, L;
let info = [];
let lc = 0;

rl.on("line", (line) => {
  if (lc === 0) {
    [N, M, L] = line.split(" ").map(Number);
  } else {
    info = line.split(" ").map(Number);
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  info.sort((a, b) => a - b);

  const pq = new MaxHeap();

  pq.add(new Interval(info[0]));
  for (let i = 1; i < info.length; i++) {
    pq.add(new Interval(info[i] - info[i - 1]));
  }

  pq.add(new Interval(L - info[info.length - 1]));

  for (let i = 0; i < M; i++) {
    const longest = pq.poll();
    longest.count += 1;
    pq.add(longest);
  }
  
  console.log(pq.poll().maxGap);
});
