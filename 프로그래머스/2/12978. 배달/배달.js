// 다익스트라 알고리즘
function solution(N, road, K) {
    var answer = 0;
    var tmp = new Set();
    var roadMap = Array.from(Array(N+1),()=>new Array(N+1).fill(10000000000));
    for(var [from,to,c] of road){
        roadMap[from][to]=Math.min(roadMap[from][to],c);
        roadMap[to][from]=Math.min(roadMap[to][from],c);
    }
    roadMap[1][1]=0;
    var queue = [];
    queue.push([1,0]);
    while(queue.length>=1){
        var [node,cost] = queue.pop();
        for(let i=1; i<=N; i++){
            if(node!=i&&cost+roadMap[node][i]<=K&&roadMap[1][i]>=roadMap[node][i]+cost){
                roadMap[1][i]=Math.min(roadMap[node][i]+cost,roadMap[1][i]);
                roadMap[i][1]=Math.min(roadMap[node][i]+cost,roadMap[i][1]);
                queue.push([i,cost+roadMap[node][i]]);
            }
        }
    }
    for(let i=1; i<=N; i++){
        if(roadMap[i][1]<=K){
         tmp.add(i);   
        }
    }
    return tmp.size;
}
