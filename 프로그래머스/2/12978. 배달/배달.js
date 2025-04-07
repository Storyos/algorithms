class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[index][1] >= this.heap[parentIdx][1]) break;
            this.swap(index, parentIdx);
            index = parentIdx;
        }
    }
    poll() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;

            if (left < length && this.heap[left][1] < this.heap[smallest][1]) smallest = left;
            if (right < length && this.heap[right][1] < this.heap[smallest][1]) smallest = right;
            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }
}

function solution(N, road, K) {
    const heap = new MinHeap();
    const dist = new Array(N + 1).fill(Infinity);
    dist[1] = 0;

    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [from, to, len] of road) {
        graph[from].push([to, len]);
        graph[to].push([from, len]);
    }

    heap.add([1, 0]);

    while (heap.size() > 0) {
        const [node, cost] = heap.poll();

        if (cost > dist[node]) continue;

        for (const [next, weight] of graph[node]) {
            const newCost = cost + weight;
            if (newCost < dist[next]) {
                dist[next] = newCost;
                heap.add([next, newCost]);
            }
        }
    }

    return dist.filter(d => d <= K).length;
}
