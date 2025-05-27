//해결책 : wires를 바탕으로 맵을 만들고 for문돌리면서 각각 하나씩끊었을때 둘의 차이 계산

function solution(n, wires) {
    //0-> 끊어진상태
    let wireMap = Array.from(Array(n+1),()=>new Array(n+1).fill(0));
    for(let w of wires){
        wireMap[w[0]][w[1]]=1;
        wireMap[w[1]][w[0]]=1;
    }
    let min = n+1;
    for(let w of wires){
        wireMap[w[0]][w[1]]=0;
        wireMap[w[1]][w[0]]=0;
        min = Math.min(min,Math.abs(getSize(w[0])-getSize(w[1])));
        wireMap[w[0]][w[1]]=1;
        wireMap[w[1]][w[0]]=1;
        
    }
    return min;
    
function getSize(idx){
    let visited = new Array(n+1).fill(false);
    let count = 0;
    dfs(idx);
    return count;
    function dfs(idx){
    visited[idx]=true;
    for(let i=1; i<=n; i++){
        if(!visited[i]&&wireMap[idx][i]===1){
            count++;
            dfs(i);
        }
    }
    return count;
}
}
    

}
