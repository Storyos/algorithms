function solution(maps) {
    var answer = 100000;
    var lc = 100000;
    
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    var visited = Array.from(Array(maps.length),()=>new Array(maps[0].length).fill(0));
    // 먼저 입구, 출구, 레버 위치 파악
    var [s,l,e]=getPoints();
    bfs(s,"L");
    if(lc>=100000) return -1;
    visited = Array.from(Array(maps.length),()=>new Array(maps[0].length).fill(0));
    bfs(l,"E");
    if(answer>=10000) return -1;
    return answer+lc;
    
    function bfs(start, goal){
        var queue = [];
        queue.push([start[0],start[1],0]);
        visited[start[0]][start[1]] = 1; 
        while(queue.length>0){
            let [y_pos,x_pos,count] = queue[0];
            // console.log(y_pos,x_pos, maps[y_pos][x_pos]);
            queue.shift();
            if(maps[y_pos][x_pos]===goal){
                console.log(count);
                if(goal==="E"){
                answer = count;
            }else{
                lc = count;
            }
            break;
            }
            else{
            for(let i=0; i<4; i++){
                var dy = y_pos+dir[i][0];
                var dx = x_pos+dir[i][1];
                if(dx>=0&&dy>=0&&dx<maps[0].length&&dy<maps.length&&visited[dy][dx]!=1&&maps[dy][dx]!="X"){
                    visited[dy][dx]=1;
                    queue.push([dy,dx,count+1]);
                }
            }
        }
    }
    }
    
    
    function getPoints(){
        var s,e,l; //start, exit, lever
    for(let i=0; i<maps.length; i++){
     for(let j=0; j<maps[0].length; j++){
         if(maps[i][j]==="S"){
             s = [i,j];
         }
         else if(maps[i][j]==="L"){
             l=[i,j];
         }
         else if(maps[i][j]==="E"){
             e=[i,j];
         }
     }   
    }
        return [s,l,e];
    }
}