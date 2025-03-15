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

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
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

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (
      this.heap[parentIdx] &&
      this.heap[index] < this.heap[parentIdx]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

bubbleDown() {
  let index = 0;
  const length = this.heap.length;

  while (true) {
    let leftIdx = 2 * index + 1;
    let rightIdx = 2 * index + 2;
    let swapIdx = null;

    if (
      leftIdx < length &&
      this.heap[leftIdx] < this.heap[index]
    ) {
      swapIdx = leftIdx;
    }
    if (
      rightIdx < length &&
      this.heap[rightIdx] < (swapIdx === null ? this.heap[index] : this.heap[leftIdx])
    ) {
      swapIdx = rightIdx;
    }

    if (swapIdx === null) break;

    this.swap(index, swapIdx);
    index = swapIdx;
  }
}

}
function solution(scoville, K) {
    const scHeap = new MinHeap();
    for (var s of scoville){
        scHeap.add(s);
    }
    let answer = 0;
    while(scHeap.heap[0]<K&&scHeap.size()>=2){
        let min1 = scHeap.poll();
        let min2 = scHeap.poll();
        scHeap.add(min1+(min2*2));
        answer++;
    }
    if(scHeap.heap[0]<K){
        return -1;
    }
    return answer;
}