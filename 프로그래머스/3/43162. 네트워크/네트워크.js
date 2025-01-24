var count = 0;
function dfs(start,n,computers,visited){
    for(let i=0; i<n; i++){
        if(i!=start && !visited[start][i]&&computers[start][i]==1){
            visited[start][i]=true;
            visited[start][start]=true;
            visited[i][start]=true;
            visited[i][i]=true;
            dfs(i,n,computers,visited);
        }
    }
    return;
}

function solution(n, computers) {
    var answer = 0;
    var visited = Array.from(Array(n), () => new Array(n).fill(false));
    for(let i=0; i<n; i++){
        if(!visited[i][i]){
            dfs(i,n,computers,visited);
            answer++;
        }
    }
    return answer;
}