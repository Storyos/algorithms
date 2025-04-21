class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  add(value, loc) {
    this.heap.push([value, loc]);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);
    while (this.heap[parent] && this.heap[parent][0] > this.heap[idx][0]) {
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  bubbleDown() {
    let idx = 0;
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    while (
      (this.heap[left] && this.heap[idx][0] > this.heap[left][0]) ||
      (this.heap[right] && this.heap[idx][0] > this.heap[right][0])
    ) {
      let smallerIdx = left;
      if (this.heap[right] && this.heap[right][0] < this.heap[smallerIdx][0]) {
        this.swap(smallerIdx, right);
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
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let V, E;
let startIdx;
let dist;
let adj;
// 간선이 정점이 20,000개 이므로 플로이드
rl.on("line", (input) => {
  if (lc === 0) {
    [V, E] = input.split(" ").map(Number);
    adj = Array.from({ length: V + 1 }, () => []);
    dist = new Array(V + 1).fill(Infinity);
  } else if (lc === 1) {
    startIdx = parseInt(input);
  } else {
    var [from, to, cost] = input.split(" ").map(Number);
    adj[from].push([to, cost]);

    if (lc === E + 1) {
      rl.close();
    }
  }
  lc++;
});

rl.on("close", () => {
  let heap = new MinHeap();
  dist[startIdx] = 0;
  heap.add(0, startIdx);
  let visited = new Array(V + 1).fill(false);
  visited[0] = true;

  while (heap.size() > 0) {
    const [curCost, curNode] = heap.poll();

    if (dist[curNode] < curCost) continue; // ✅ 핵심 조건, visited 없이도 충분

    for (const [next, weight] of adj[curNode]) {
      const totalCost = curCost + weight;
      if (totalCost < dist[next]) {
        dist[next] = totalCost;
        heap.add(totalCost, next);
      }
    }
  }

  for (let i = 1; i <= V; i++) {
    if (dist[i] === Infinity) console.log("INF");
    else console.log(dist[i]);
  }
});
