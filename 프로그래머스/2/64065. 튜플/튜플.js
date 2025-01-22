function tupleToArray(c){
    var tmp = [];
    for(let i=0; i<c.length; i++){
        tmp.push(c[i].substring(1,c[i].length-1));   
    }
    tmp = tmp.sort((a,b)=>a.length-b.length);
    return tmp;
}

function solution(s) {
    s = s.replaceAll('},',"}/");
    s= s.substring(1,s.length-1).split("/");
    var arr = tupleToArray(s);
    var compareSet = new Set();
    var answer = [];
    for(let i=0; i<arr.length; i++){
        var tmp = arr[i].split(',');
        for(var num of tmp){
            if(!compareSet.has(num)){
            compareSet.add(num);
            answer.push(parseInt(num));
            }
        }
    }
    return answer;
}