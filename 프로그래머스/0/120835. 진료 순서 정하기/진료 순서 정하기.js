function solution(emergency) {
    let eMap = new Map();
    let tmp = [...emergency].sort((a,b)=>b-a);
    for(let i=0; i<tmp.length; i++){
        eMap.set(tmp[i],i+1);
    }
    let answer = [];
    for(let e of emergency){
        answer.push(eMap.get(e));
    }
    return answer;
}