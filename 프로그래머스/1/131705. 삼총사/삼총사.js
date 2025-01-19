var visited;
var cnt = 0;
function picking(number,sum, start, count){
    if(count==3){
        if(sum==0){
            cnt++;
            return true;
        }
        return false;
    }else{
        for(let i=start; i<number.length; i++) {
            if(!visited[i]){
                visited[i]=true;
                picking(number,sum+number[i],i,count+1);
                visited[i]=false;
            }
        }
    }
    
}
function solution(number) {
    visited = new Array(number.length).fill(false);
    var answer = 0;
    picking(number,0,0,0);

    return cnt;
}