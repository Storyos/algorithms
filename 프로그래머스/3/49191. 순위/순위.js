function solution(n, results) {
    let answer = 0;
    let winnerSet = Array.from(Array(n+1),()=>new Set());
    let loserSet = Array.from(Array(n+1),() => new Set());
    for(var [winner,loser] of results){
        winnerSet[winner].add(loser);
        loserSet[loser].add(winner);
    }
    let visited,visited2;
    for(let i=1; i<=n; i++){
         visited = new Array(n+1).fill(false);
         visited2 = new Array(n+1).fill(false);
        visited2[0]=true;
        visited[0]=true;
        let arr =[];
        let arr2 =[];
        addData(arr,i);
        addLoseData(arr2,i);
        if(arr.length+arr2.length+1===n) answer++;
    }
    return answer;
    function addLoseData(arr2,num){
        visited2[num]=true;
        for(let loses of loserSet[num].values()){
            if(!visited2[loses]){
                arr2.push(loses);
                addLoseData(arr2,loses);
            }
        }
    }
    
    function addData(arr,num){
        visited[num]=true;
        for(let wins of winnerSet[num].values()){
            if(!visited[wins]){
                arr.push(wins);
                addData(arr,wins);
            }
        }
    }
}