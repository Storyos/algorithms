function solution(n, t, m, p) {
//     n : 진법
//     t : 미리 구할 숫자의 개수
//     m : 게임에 참가하는 인원
//     p : 튜브의 순서
    var tube = [];
    var tmp = '';
    for(let i=0; i<=m*t+p; i++){
    tmp += i.toString(n).toUpperCase();    
    }
    var arr = tmp.split("");
    var answer ='';
    var cnt = 0;
    
    for(let i=0; i<tmp.length; i++){
        if(i%m==(p-1)){
            answer+=tmp[i];
        }
        if(answer.length==t)
            break;
    }
    return answer;
}