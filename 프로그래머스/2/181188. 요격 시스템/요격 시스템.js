// A나라가 B나라를 침공
// (s,e) x 좌표에서 y축에 수평이 되도록 미사일을 발사
// 발사된 미사일은 x좌표에 걸쳐있는 모든 미사일 관통해서 요격
// s,e는 정수
function solution(targets) {
    targets.sort((a,b)=>a[0]-b[0]);
    let count = 1;
    //구해야하는것 미사일 최소 날리는 값
    let [start,end] = targets[0];
    for(let i=1; i<targets.length; i++){
        // 시작지점이 start와 end사이
        if(targets[i][0] < end){
            start = targets[i][0];
            end = Math.min(end,targets[i][1]);
        }else{
            count++;
            start = targets[i][0];
            end = targets[i][1];
        }
    }
    var answer = 0;
    return count;
}