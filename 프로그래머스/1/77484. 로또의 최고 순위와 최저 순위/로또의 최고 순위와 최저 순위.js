function ranking(cnt){
    if(cnt<=1){
        return 6;
    } else{
        return 7-cnt;
    }
}
function solution(lottos, win_nums) {
    // 0 : 알아볼 수 없는 번호 
    var answer = [];
    var winMap = new Set();
    for(var num of win_nums){
        winMap.add(num);
    }
    var cnt =0 ;
    var zero_cnt = 0;
    for(let i=0; i<lottos.length; i++){
        if(winMap.has(lottos[i])){
            cnt++;
        } else if(lottos[i]==0) zero_cnt++;
    }
    
    return [ranking(cnt+zero_cnt),ranking(cnt)];
}