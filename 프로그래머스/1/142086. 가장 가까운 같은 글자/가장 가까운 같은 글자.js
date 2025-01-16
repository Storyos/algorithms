function solution(s) {
    var answer = [];
    var tmp = new Map();
    for(let i=0; i<s.length; i++){
        if(!tmp.has(s[i])){
            answer.push(-1);
            tmp.set(s[i],i);
        }
        else{
            answer.push(i-tmp.get(s[i]));
            tmp.set(s[i],i);
        }
    }
    return answer;
}