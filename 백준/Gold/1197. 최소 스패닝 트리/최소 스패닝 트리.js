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
let V, E;
let treeData;

// 최소 스패닝 트리 : 주어진 그래프의 모든 정점들을 연결하는 부분 그래프 중에서
// 그 가중치의 합이 최소인 트리리
rl.on("line", (input) => {
  if (lc === 0) {
    [V, E] = input.split(" ").map(Number);
    treeData = Array.from({ length: V + 1 }, () => []);
  } else {
    let [from, to, cost] = input.split(" ").map(Number);
    treeData[from].push([to, cost]);
    treeData[to].push([from, cost]);
    if (lc === E) {
      rl.close();
    }
  }
  lc++;
});

rl.on("close", () => {
  let answer = findSpanningTree(1);

  console.log(answer);

  function findSpanningTree(start) {
    const visited = Array(V + 1).fill(false);
    const heap = new MinHeap();
    heap.add([start, 0]);
    let totalCost = 0;
    let count = 0;

    while (heap.heap.length > 0) {
      let [n, c] = heap.poll();
      if (visited[n]) continue;
      visited[n] = true;
      totalCost += c;
      count++;

      for (let [nextNode, nextCost] of treeData[n]) {
        if (!visited[nextNode]) heap.add([nextNode, nextCost]);
      }
    }
    return count === V ? totalCost : Infinity;
  }
});
