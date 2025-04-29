function solution(k, d) {
    var answer = 0;
    for(let x=0; x<=d; x+=k){
        const tmp = Math.sqrt(d*d-x*x);
        const y = Math.floor(tmp/k)+1;
        answer+=y
    }
    return answer;
}