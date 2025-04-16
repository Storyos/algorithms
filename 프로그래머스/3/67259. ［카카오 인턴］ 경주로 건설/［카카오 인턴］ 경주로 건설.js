function solution(board) {
    const N = board.length;
    const cost = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => Array(4).fill(Infinity))
    );

    const queue = [];
    const directions = [
        [0, 1],   // → 0
        [1, 0],   // ↓ 1
        [0, -1],  // ← 2
        [-1, 0],  // ↑ 3
    ];

    // 시작점에서 오른쪽, 아래 방향 먼저 시작
    for (let i = 0; i < 2; i++) {
        const [dy, dx] = directions[i];
        const ny = dy;
        const nx = dx;
        if (board[ny]?.[nx] === 0) {
            cost[ny][nx][i] = 100;
            queue.push([ny, nx, i, 100]);
        }
    }

    while (queue.length) {
        const [y, x, dir, currentCost] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const [dy, dx] = directions[i];
            const ny = y + dy;
            const nx = x + dx;

            if (ny >= 0 && ny < N && nx >= 0 && nx < N && board[ny][nx] === 0) {
                const newCost = currentCost + (dir === i ? 100 : 600);
                if (cost[ny][nx][i] > newCost) {
                    cost[ny][nx][i] = newCost;
                    queue.push([ny, nx, i, newCost]);
                }
            }
        }
    }

    return Math.min(...cost[N - 1][N - 1]);
}
