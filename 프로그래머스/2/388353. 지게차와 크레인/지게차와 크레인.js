function solution(storage, requests) {
    const [N,M]=[storage.length,storage[0].length];
    const dir = [[1,0],[0,1],[0,-1],[-1,0]];
    let count = 0;
    for(let req of requests){
        let lists = [];
        if(req.length===2){
            lists = getIndex(req[0]);
        }else{
            let candidates = getIndex(req[0]);
            for(let [y,x] of candidates){
                if(checkEdge(y,x)) lists.push([y,x])
            }
        }
        replace(lists);
    }
    
    return N*M-count;

    function replace(lists){
        for(let [y,x] of lists){
            let tmp = storage[y].split("");
            tmp[x]="x";
            storage[y]=tmp.join("");
            count++;
        }
    }
    
    function getIndex(c){
        let tmp = [];
        for(let i=0; i<N; i++){
            for(let j=0; j<M; j++){
                if(storage[i][j]===c){
                    tmp.push([i,j]);
                }
            }
        }
        return tmp;
    }
    
    function checkEdge(y,x){
    let visited = Array.from(Array(N),()=>new Array(M).fill(false));
        return dfs(y,x);
        function dfs(y, x) {
    visited[y][x] = true;
    if (x===0||y===0||y===N-1||x===M-1)return true;
    else {
        for (let i = 0; i < 4; i++) {
            let dy = y + dir[i][0];
            let dx = x + dir[i][1];
            if (storage[dy][dx] === "x" && !visited[dy][dx]) {
                if (dfs(dy, dx)) return true; 
            }
        }
    }
    return false;
}

    }
}