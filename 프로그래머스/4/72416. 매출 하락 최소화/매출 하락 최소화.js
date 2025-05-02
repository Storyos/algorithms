function solution(sales, links) {
    const n = sales.length;
    const tree = Array.from({length: n + 1}, () => []);
    const dp = Array.from({length: n + 1}, () => [0, 0]);
    
    links.forEach(([leader, member]) => {
        tree[leader].push(member);
    });

    function dfs(node) {
        dp[node][1] = sales[node - 1]; // 본인이 참석할 때 비용
        if (tree[node].length === 0) return; // leaf 노드

        let childSum = 0;
        let attendExtra = Infinity;

        tree[node].forEach(child => {
            dfs(child);
            childSum += Math.min(dp[child][0], dp[child][1]);

            attendExtra = Math.min(attendExtra, dp[child][1] - dp[child][0]);
        });

        dp[node][1] += childSum;

        if (attendExtra < 0) attendExtra = 0;
        dp[node][0] = childSum + attendExtra;
    }

    dfs(1);
    return Math.min(dp[1][0], dp[1][1]);
}
