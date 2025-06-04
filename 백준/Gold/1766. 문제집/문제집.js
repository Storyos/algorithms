class MinHeap {
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
    while (this.heap[parent] && this.heap[parent] > this.heap[idx]) {
      this.swap(parent, idx);
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
    let parent = 0;
    let left = parent * 2 + 1;
    let right = parent * 2 + 2;
    while (
      (this.heap[left] && this.heap[left] < this.heap[parent]) ||
      (this.heap[right] && this.heap[right] < this.heap[parent])
    ) {
      let smallerIdx = left;
      if (this.heap[right] && this.heap[smallerIdx] > this.heap[right]) {
        smallerIdx = right;
      }
      this.swap(smallerIdx, parent);
      parent = smallerIdx;
      left = parent * 2 + 1;
      right = parent * 2 + 2;
    }
  }
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, M;
let probMap;
let degree;
rl.on("line", (input) => {
  if (lc === 0) {
    [N, M] = input.split(" ").map(Number);
    probMap = Array.from(Array(N + 1), () => new Array());
    degree = new Array(N + 1).fill(0);
  } else {
    let [from, to] = input.split(" ").map(Number);
    probMap[from].push(to);
    degree[to]++;
    if (lc === M) {
      rl.close();
    }
  }
  lc++;
});

rl.on("close", () => {
  let heap = new MinHeap();
  for (let i = 1; i <= N; i++) {
    if (degree[i] === 0) heap.add(i);
  }
  let answer = [];


  while (heap.heap.length > 0) {
    let cur = heap.poll();
    answer.push(cur);

    for (let next of probMap[cur]) {
      degree[next]--;
      if (degree[next] === 0) {
        heap.add(next);
      }
    }
  }
  console.log(answer.join(" "));
});
