function solution(players, m, k) {
    var answer = 0;
//     m 명 늘어날 때마다 서버 1 대 필요
//     서버는 k시간 운영 후 반납
    let server = []; // 서버생성시에 종료시간을 여기서 기재
    let sc = 0; //server count
    for(let t = 0;  t<players.length; t++){
        // console.log(`현재 서버 : ${sc} , 현재 플레이어 :${players[t]}`)
        while((sc+1)*m<=players[t]){
            server.push(t+k);
            sc++;
            answer++;
        }
        while(server.length>0){
            if(server[0]===t+1){
                server.shift();
                sc--;
            }else{
                break;
            }
        }
    }
    return answer;
}