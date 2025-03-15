function solution(record) {
    let idMap = new Map();
    for(var r of record){
        let [cmd,id,nick] = r.split(' ');
        if(!idMap.has(id)||cmd==="Change"||cmd==="Enter"){
            idMap.set(id,nick);
        }
    }
    var answer = [];
    for(var r of record){
        let [cmd,id,nick] = r.split(' ');
        if(cmd==="Enter"){
            answer.push(`${idMap.get(id)}님이 들어왔습니다.`);
        } else if(cmd==="Leave"){
            answer.push(`${idMap.get(id)}님이 나갔습니다.`);
        }
    }
    return answer;
}