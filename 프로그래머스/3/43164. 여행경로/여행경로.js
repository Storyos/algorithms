function solution(tickets) {
    var answer = [];
    let visited = new Array(tickets.length).fill(false);
    bfs("ICN",["ICN"]);
    answer = answer.sort((a,b)=>a.join("").localeCompare(b.join("")))[0];
    function bfs(start,arr){
        if(arr.length===visited.length+1){
            answer.push([...arr]);
            return;
        }else{
            for(let i=0; i<tickets.length; i++){
                if(!visited[i]&&tickets[i][0]===start){
                    visited[i]=true;
                    arr.push(tickets[i][1]);
                    bfs(tickets[i][1],arr);
                    arr.pop();
                    visited[i]=false;
                }
            }
        }
        
    }
    
    
    return answer;
}