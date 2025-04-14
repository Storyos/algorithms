function solution(n, s, a, b, fares) {
    const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    for (let i = 1; i <= n; i++) dist[i][i] = 0;
    
    for (const [from, to, cost] of fares) {
        dist[from][to] = cost;
        dist[to][from] = cost;
    }
    
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    let minCost = Infinity;
    for (let t = 1; t <= n; t++) {
        const cost = dist[s][t] + dist[t][a] + dist[t][b];
        minCost = Math.min(minCost, cost);
    }

    return minCost;
}
