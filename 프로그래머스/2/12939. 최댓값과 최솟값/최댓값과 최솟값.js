function solution(s) {
    var tmp = s.split(" ").map(a=>parseInt(a)).sort((a,b)=>a-b);
    var answer = tmp[0].toString()+" "+tmp[tmp.length-1].toString();
    
    return answer;
}