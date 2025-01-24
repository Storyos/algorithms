function drawLine(rectangle){
    var map = Array.from(Array(103),()=>Array(103).fill(0));
    for(var rect of rectangle){
    var [startX,startY,endX,endY] = rect;
    for(let i=startX+1; i<endX; i++){
        for(let j=startY+1; j<endY; j++){
            map[i][j]=-1;
        }
    }
    for(let i=startX; i<=endX; i++){
        if(map[i][startY]!=-1)
            map[i][startY]=1;
        if(map[i][endY]!=-1)
            map[i][endY]=1;
    }
    for(let i=startY; i<=endY; i++){
        if(map[startX][i]!=-1)
            map[startX][i]=1;
        if(map[endX][i]!=-1)
            map[endX][i]=1;
    }
    }
    return map;
}
function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    characterX*=2;
    characterY*=2;
    itemX*=2;
    itemY*=2;
    let doubleRec = rectangle.map(rec => rec.map (point => point*2));
    var [minx,miny,maxx,maxy]=[...rectangle];
    var map = drawLine(doubleRec);
    var queue=[[characterX,characterY,0]];
    var visited = Array.from(Array(103),()=>Array(103).fill(false));

    const dir = [[0,1],[0,-1],[-1,0],[1,0]];
    var min = 1000000;
    while(queue.length>=1){
        var [x,y,depth] = queue[0];
        if(x==itemX&&y==itemY){
            min = Math.min(min,depth);
            break;
        }
        visited[x][y]=true;
        queue.shift();
        for(let i=0; i<4; i++){
         nx = x+dir[i][0];
         ny = y+dir[i][1];
        if(!visited[nx][ny]&&map[nx][ny]==1){
            queue.push([nx,ny,depth+1]);
            }
        }
    }
    return depth/2;
}