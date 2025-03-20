function solution(n, stations, w) {
    var answer = 0;
    let lastIdx = 1
    for(var station of stations){
        let res = Math.ceil(((station-w)-lastIdx)/(2*w+1));
        answer+=res;
        lastIdx=station+w+1;
    }
    if(lastIdx<n){
    return answer+Math.ceil((n-lastIdx)/(2*w+1));
    }
    if(lastIdx>n) return answer;
    return answer+1;
}