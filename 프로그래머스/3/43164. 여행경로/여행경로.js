function solution(tickets) {
    const answer = [];
    const visited = new Array(tickets.length).fill(false);
    tickets.sort((a, b) => a[1].localeCompare(b[1])); // 도착지 기준 정렬

    function dfs(path, count){
        if (count === tickets.length) {
            answer.push([...path]);
            return true; // 정답 하나만 찾으면 종료
        }

        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === path[path.length - 1]) {
                visited[i] = true;
                path.push(tickets[i][1]);
                if (dfs(path, count + 1)) return true;
                visited[i] = false;
                path.pop();
            }
        }
        return false;
    };

    dfs(["ICN"], 0);
    return answer[0];
}
