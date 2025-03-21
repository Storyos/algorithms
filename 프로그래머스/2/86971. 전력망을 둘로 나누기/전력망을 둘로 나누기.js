function solution(n, wires) {
    let arr = Array.from(Array(n+1),()=>new Array(n+1).fill(0));
    
    for(var w of wires){
        arr[w[0]][w[1]]=1;
        arr[w[1]][w[0]]=1;
    }
    let min = n+1;
    for(var w of wires){
        arr[w[0]][w[1]]=0;
        arr[w[1]][w[0]]=0;
        let tmp = Math.abs(getSize(w[0])-getSize(w[1]));
        min = Math.min(tmp,min);
        arr[w[0]][w[1]]=1;
        arr[w[1]][w[0]]=1;
    }

    
    return min;
function getSize(start) {
    let visited = Array(n + 1).fill(false);
    let count = 0;

    function dfs(node) {
        visited[node] = true;
        count++;
        for (let i = 1; i <= n; i++) {
            if (arr[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    dfs(start);
    return count;
}

}