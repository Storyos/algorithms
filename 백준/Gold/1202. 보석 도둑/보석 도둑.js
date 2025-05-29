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
      (this.heap[left] && this.heap[left][1] > this.heap[idx][1]) ||
      (this.heap[right] && this.heap[right][1] > this.heap[idx][1])
    ) {
      let smallerIdx = left;
      if (this.heap[right] && this.heap[smallerIdx][1] < this.heap[right][1]) {
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
let n, k;
let jInfo = [];
let bagW = [];
rl.on("line", (input) => {
  if (lc === 0) {
    [n, k] = input.split(" ").map(Number);
  } else if (lc <= n) {
    jInfo.push(input.split(" ").map(Number));
  } else {
    if (input.length >= 7) bagW.push(1000000);
    else bagW.push(Number(input));
    if (bagW.length === k) {
      rl.close();
    }
  }

  lc++;
});

rl.on("close", () => {
  jInfo.sort((a, b) => b[0] - a[0]);
  bagW.sort((a, b) => a - b);
  const queue = new MaxHeap();
  let answer = 0;
  for (let bag of bagW) {
    while (jInfo.length > 0 && jInfo[jInfo.length - 1][0] <= bag) {
      queue.add(jInfo.pop());
    }
    if (queue.heap.length > 0) {
      let d = queue.poll();
      // console.log(bag, "가방에 들어가는", d);
      answer += d[1];
    }
  }
  console.log(answer);
});
