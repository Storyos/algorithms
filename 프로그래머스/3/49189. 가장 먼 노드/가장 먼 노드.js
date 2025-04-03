// goal : 1번 노드에서 가장 멀리 떨어진 노드 갯수를 구하기
function solution(n, edge) {
//     이차원 배열 안됨
    var maxnum = -1;
    var arr = Array.from({length:n+1},()=>[]);
    var cnt = new Array(n+1).fill(50000);
    for(var [from,to] of edge){
        arr[from].push(to);
        arr[to].push(from);
    }
    cnt[0]=0;
    cnt[1]=0;
    var queue = [];
    queue.push([1,0]);
    while(queue.length>=1){
        var [node,len] = queue[0];
        maxnum=Math.max(len);
        queue.shift();
        for(var con of arr[node]){
            if(cnt[con]>len+1){
                cnt[con]=len+1;
                queue.push([con,len+1]);
            }
        }
    }
    
    return cnt.reduce((acc,n)=>{
        if(n===maxnum){
            acc++;
        }
        return acc;
    },0);
}