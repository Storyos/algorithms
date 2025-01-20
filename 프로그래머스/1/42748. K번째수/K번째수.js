function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++) {
        var tmp = array;
        var [from,to,k] = commands[i];
        answer.push(tmp.slice(from-1,to).sort((a,b)=>a-b)[k-1]);
    }
    return answer;
}