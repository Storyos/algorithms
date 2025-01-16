function solution(s) {
    var answer = 0;
    let xc,x,nx;
    let init = true;
    for(let i=0; i<s.length; i++){
        if(init){
            x = s[i];
            xc = 0;
            nx = 0;
            init = false;
        }
        s[i]==x?xc++:nx++;
        if(xc == nx){
            answer++;
            init = true;
        }
    }
    if(xc!=nx) answer++;
    return answer;
}