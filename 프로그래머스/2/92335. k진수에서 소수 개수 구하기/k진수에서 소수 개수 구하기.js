function isPrime(n){
    if(n==1) return false;
    if(n==2) return true;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i==0) return false;
    }
    return true;
}

function solution(n, k) {
    var answer = 0;
    var tmp  = n.toString(k).split('0');
    var num_list =[];
    for(var num of tmp){
        if(num)
            answer=isPrime(num)?answer+1:answer;
    }
 
 
    return answer;
}