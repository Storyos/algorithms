function solution(info, n, m) {
    const INF = 100000;
    const size = info.length;
    const dp = Array.from({ length: size + 1 }, () => Array(m).fill(INF));
    
    dp[0][0] = 0;

    for (let i = 1; i <= size; i++) {
        const a = info[i - 1][0];
        const b = info[i - 1][1];

        for (let j = 0; j < m; j++) {
            // a 선택
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + a);
            // b 선택
            if (j + b < m) {
                dp[i][j + b] = Math.min(dp[i][j + b], dp[i - 1][j]);
            }
        }
    }

    let min = INF;
    for (let j = 0; j < m; j++) {
        min = Math.min(dp[size][j], min);
    }

    return min >= n ? -1 : min;
}
