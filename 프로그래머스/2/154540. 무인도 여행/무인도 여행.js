function solution(maps) {
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    var answer = [];
    var sum = 0;
    var visited = Array.from(Array(maps.length),()=>new Array(maps[0].length).fill(false));
    for(let y=0; y<maps.length; y++){
        for(let x=0; x<maps[0].length; x++){
            if(maps[y][x]!="X"&&!visited[y][x]){
                sum = 0;
                finding(y,x);
                answer.push(sum);
            }
        }
    }
    if(answer.length===0) return [-1]
    function finding(y,x){
        visited[y][x]=true;
        sum+=Number(maps[y][x]);
        for(let i=0; i<4; i++){
            dy = y + dir[i][0];
            dx = x + dir[i][1];
            if(dx>=0&&dy>=0&&dx<maps[0].length&&dy<maps.length&&maps[dy][dx]!="X"&&!visited[dy][dx]){
                finding(dy,dx);
            }
        }
    }
    return answer.sort((a,b)=>a-b);
}