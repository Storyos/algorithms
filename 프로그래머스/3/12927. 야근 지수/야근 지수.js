class MaxHeap {
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

    bubbleUp() {
        let index = this.heap.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);

        while (parentIdx >= 0 && this.heap[index] > this.heap[parentIdx]) {
            this.swap(index, parentIdx);
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
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
        let index = 0;
        let leftChildIdx = index * 2 + 1;
        let rightChildIdx = index * 2 + 2;

        while (true) {
            let biggerIdx = index;

            if (leftChildIdx < this.size() && this.heap[leftChildIdx] > this.heap[biggerIdx]) {
                biggerIdx = leftChildIdx;
            }

            if (rightChildIdx < this.size() && this.heap[rightChildIdx] > this.heap[biggerIdx]) {
                biggerIdx = rightChildIdx;
            }

            if (biggerIdx === index) {
                break;
            }

            this.swap(index, biggerIdx);
            index = biggerIdx;
            leftChildIdx = index * 2 + 1;
            rightChildIdx = index * 2 + 2;
        }
    }
}




function solution(n, works) {
    let maxHeap = new MaxHeap();
    let arrSum = works.reduce((acc,n)=>acc+=n,0);
    if(n>=arrSum){
        return 0;
    }
    for(let i=0; i<works.length; i++){
        maxHeap.add(works[i]);
    }
    while(n>0){
        let target = maxHeap.poll();
        let second = maxHeap.heap[0];
        if(target-second+1<=n){
            let sub = target-second+1;
            target -= sub;
            n-= sub;
        }else{
            target-=n;
            n=0;
        }
        maxHeap.add(target);
    }
    var answer = maxHeap.heap.reduce((acc,n)=>acc+=Math.pow(n,2),0);
    return answer;
}
