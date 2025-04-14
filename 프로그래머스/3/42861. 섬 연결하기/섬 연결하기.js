function solution(n, costs) {
    // 1. 간선 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);

    const parent = Array(n).fill(0).map((_, i) => i);
    
    function find(x){
        if (x === parent[x]) return x;
        return parent[x] = find(parent[x]); // 경로 압축
    };

    function union(a, b){
        const rootA = find(a);
        const rootB = find(b);
        if (rootA === rootB) return false; // 사이클 있음
        parent[rootB] = rootA;
        return true;
    };

    let answer = 0;
    for (const [from, to, cost] of costs) {
        if (union(from, to)) {
            answer += cost; // 간선 채택 시 비용 추가
        }
    }

    return answer;
}
