// source : 각 부대원이 위치한 지역
// roads : 길 정보
// 길이 없는 경우에는 -1 return 
function solution(n, roads, sources, destination) {
    var answer = [];
    var roadinfo = new Map();
    for(var i=1; i<=n; i++) roadinfo.set(i,[]);
    
    for(var [from,to] of roads){
        roadinfo.set(from,[...roadinfo.get(from),to]);
        roadinfo.set(to,[...roadinfo.get(to),from]);
    }
        var data = new Array(n).fill(Infinity);
        var queue = [];
        const visited = new Array(n+1).fill(false);
        var min = Infinity;
        queue.push([destination,0]);
        var queueindex=0;
        while(queue.length>queueindex){
            var [loc,count] = queue[queueindex];
            visited[loc]=true;
            queueindex++; 
            data[loc-1] = Math.min(count,data[loc-1]);
            for(var nextLoc of roadinfo.get(loc)){
                if(!visited[nextLoc]){
                    queue.push([nextLoc,count+1]);
                }
            }
        }
    for(var s of sources){
        answer.push(data[s-1]===Infinity?-1:data[s-1])
    }

    return answer;
}