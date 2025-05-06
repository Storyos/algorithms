const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
    while (this.heap[parent] && this.heap[parent][0] > this.heap[idx][0]) {
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
      (this.heap[left] && this.heap[left][0] < this.heap[parent][0]) ||
      (this.heap[right] && this.heap[right][0] < this.heap[parent][0])
    ) {
      let smallerIdx = left;
      if (this.heap[right] && this.heap[smallerIdx][0] > this.heap[right][0]) {
        smallerIdx = right;
      }
      this.swap(smallerIdx, parent);
      parent = smallerIdx;
      left = parent * 2 + 1;
      right = parent * 2 + 2;
    }
  }
}
let lc = 0;
let N, M;
let busInfo = [];
let s, e;
rl.on("line", (input) => {
  if (lc === 0) {
    N = Number(input);
  } else if (lc === 1) {
    M = Number(input);
  } else if (busInfo.length < M) {
    busInfo.push(input.split(" ").map(Number));
  } else {
    [s, e] = input.split(" ").map(Number);
    rl.close();
  }
  lc++;
});

rl.on("close", () => {
  let heap = new MinHeap();
  let dist = new Array(N + 1).fill(Infinity);
  let adj = Array.from({ length: N + 1 }, () => []);
  for (let [start, end, cost] of busInfo) {
    adj[start].push([end, cost]);
  }
  heap.add([0, s]);
  while (heap.heap.length > 0) {
    const [curCost, curNode] = heap.poll();
    // 이미 dist에 저장된 거리가 더 짧을경우 넘어감
    if (dist[curNode] < curCost) continue;
    for (let [nextNode, cost] of adj[curNode]) {
      let totalCost = cost + curCost;
      if (dist[nextNode] > totalCost) {
        dist[nextNode] = totalCost;
        heap.add([totalCost, nextNode]);
      }
    }
  }
  console.log(dist[e]);
});
