class MinHeap {
  constructor() {
    this.heap = [];
    this.sum = 0;
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    this.heap.push(value);
    this.sum+=value;
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 1) {
        this.sum=0;
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.sum = this.sum - value;
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
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[index]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[index])
    ) {
      let smallerIdx = leftIdx;
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx] < this.heap[smallerIdx]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

function solution(n, k, enemy) {
    
    var answer = 0;
    if(enemy.length<=k) return enemy.length;
    var mujeok = new MinHeap();
    var arr =[];
    arr.push(enemy[0]);
    mujeok.add(enemy[0]);
    for(var i =1 ; i<enemy.length; i++){
        arr[i]=arr[i-1]+enemy[i];
        if(mujeok.size()===k){
            var m = mujeok.poll();
            if(m>enemy[i]){
                mujeok.add(m);
            } else{
                mujeok.add(enemy[i]);
            }
        }else{
            mujeok.add(enemy[i]);
        }
        if(n<arr[i]-mujeok.sum){
            return i;        
        }

    }
    return enemy.length;
}