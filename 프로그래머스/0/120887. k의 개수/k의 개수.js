function solution(i, j, k) {
    var answer = 0;
    for(let a = i; a<=j; a++){
        let tmp = a.toString().split('').map(Number);
        for(let b=0; b<tmp.length; b++){
            
            if(tmp[b]===k){
                answer++;
            }
        }
    }
    return answer;
}