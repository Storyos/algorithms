class MaxHeap {
  constructor() {
    this.heap = [];
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);
    while (this.heap[parent] && this.heap[parent][1] < this.heap[idx][1]) {
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleDown() {
    let idx = 0;
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    while (
      (this.heap[left] && this.heap[left][1] > this.heap[idx][1]) ||
      (this.heap[right] && this.heap[right][1] > this.heap[idx][1])
    ) {
      let biggerIdx = left;
      if (this.heap[right] && this.heap[right][1] > this.heap[biggerIdx][1]) {
        biggerIdx = right;
      }
      this.swap(biggerIdx, idx);
      idx = biggerIdx;
      left = idx * 2 + 1;
      right = idx * 2 + 2;
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lc = 0;
let oilInfo = [];
let N;
let d, curOil;
rl.on("line", (input) => {
  if (lc === 0) {
    N = Number(input);
  } else if (lc <= N) {
    let [a, b] = input.split(" ").map(Number);
    oilInfo.push([a, b]);
  } else {
    [d, curOil] = input.split(" ").map(Number);
    rl.close();
  }
  lc++;
}).on("close", () => {
  oilInfo.push([d, 0]);
  oilInfo.sort((a, b) => a[0] - b[0]);
  let heap = new MaxHeap();
  let answer = 0;
  for (let [distance, oil] of oilInfo) {
    //갈수있으면 후보지에 넣기
    if (distance <= curOil) {
      heap.add([distance, oil]);
    } else {
      //갈 수 없으면 후보지에서 하나 빼서 그만큼 추가
      while (distance > curOil) {
        if (heap.heap.length === 0) {
          console.log("-1");
          return;
        } else {
          const [a, b] = heap.poll();
          curOil += b;
          answer++;
        }
      }
      heap.add([distance, oil]);
    }
  }
  console.log(answer);
});
