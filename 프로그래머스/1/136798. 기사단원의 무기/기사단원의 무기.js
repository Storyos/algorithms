function getDivide(num){
    let count = 0;
    for(let i=1; i<Math.sqrt(num); i++){
           if(num%i==0){
               count+=2;
           }
    }
    if(num%Math.sqrt(num)==0) count++;
    return count;
}

function solution(number, limit, power) {
    var answer = 0;
    var tmp = [];
    for(let i=1; i<=number; i++){
        var s = getDivide(i);
        if(s>limit){
            answer+=power;
        }else{
            answer+=s;
        }
    }
    
    return answer;
}