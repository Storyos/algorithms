const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    
    const queue = [];
    queue.push([0, 0, 1]); 
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, cnt] = queue.shift();
        if (x === cols - 1 && y === rows - 1) {
            return cnt;
        }
        for (let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];
            if (nx >= 0 && ny >= 0 && nx < cols && ny < rows && !visited[ny][nx] && maps[ny][nx] === 1) {
                visited[ny][nx] = true; // 방문 처리
                queue.push([nx, ny, cnt + 1]);
            }
        }
    }

    // 목적지에 도달할 수 없는 경우
    return -1;
}
