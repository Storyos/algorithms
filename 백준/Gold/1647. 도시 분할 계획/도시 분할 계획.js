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
    while (this.heap[parent] && this.heap[parent][1] > this.heap[idx][1]) {
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      let value = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return value;
    }
  }
  bubbleDown() {
    let idx = 0;
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    while (
      (this.heap[left] && this.heap[left][1] < this.heap[idx][1]) ||
      (this.heap[right] && this.heap[right][1] < this.heap[idx][1])
    ) {
      let smallerIdx = left;
      if (this.heap[right] && this.heap[right][1] < this.heap[smallerIdx][1]) {
        smallerIdx = right;
      }
      this.swap(smallerIdx, idx);
      idx = smallerIdx;
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
let N, M;
let roadMap;
rl.on("line", (input) => {
  if (lc === 0) {
    [N, M] = input.split(" ").map(Number);
    roadMap = Array.from({ length: N + 1 }, () => []);
  } else {
    let [from, to, cost] = input.split(" ").map(Number);
    roadMap[from].push([to, cost]);
    roadMap[to].push([from, cost]);
    if (lc === M) rl.close();
  }
  lc++;
});

// 1. 분리된 두 마을 사이에 있는 길들은 필요가 없다.
//

rl.on("close", () => {
  // 마을을 두개로 분리
  let costs = [];
  let answer = SpanningTree(1);
  costs.sort((a, b) => b - a);
  console.log(answer - costs[0]);
  function SpanningTree(start) {
    const visited = Array(N + 1).fill(false);
    const heap = new MinHeap();
    heap.add([start, 0]);
    let totalCost = 0;
    while (heap.heap.length > 0) {
      let [n, c] = heap.poll();
      if (visited[n]) continue;
      visited[n] = true;
      costs.push(c);

      totalCost += c;
      for (let [nextNode, nextCost] of roadMap[n]) {
        if (!visited[nextNode]) heap.add([nextNode, nextCost]);
      }
    }
    return totalCost;
  }
});
