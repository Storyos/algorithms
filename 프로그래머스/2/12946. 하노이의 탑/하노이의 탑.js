function solution(n) {
    var answer = [];
    hanoi(n,1,3,2)
    
    function hanoi(n,from,to,other){
        if(n===1){
            answer.push([from,to]);
            return;
        }else{
            hanoi(n-1,from,other,to);
            answer.push([from,to]);
            hanoi(n-1,other,to,from);
        }
    }
    return answer;
}