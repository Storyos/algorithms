// a, b -> 필요한 금과 은
// i번 도시 -> i번만 왕복 가능 편도로 
// t[i] 소요, 최대 w[i] kg 운반가능
// 가장 빠른시간 return 

function solution(a, b, g, s, w, t) {
    var answer = -1;
    var start = 0;
    var end = -1;
    const arr = [];
    for(var i=0; i<g.length; i++){
        const v = Math.ceil((g[i]+s[i]-w[i])/w[i])*t[i]*2+t[i];
        end = end<v?v:end;
    }
    
    while(start<=end){
        var time = Math.floor((start+end)/2);
        // 여기서 이제 들고오는걸 체크
        var totalGold  = 0;
        var totalSilver = 0;
        var totalGoldnSilver = 0;
        for(var i=0; i<g.length; i++){
            const roundTrip = t[i] * 2;
            const moveCount = Math.floor(time / roundTrip) + (time % roundTrip >= t[i] ? 1 : 0);
            const maxMoveWeight = moveCount * w[i];

            const gold = Math.min(g[i], maxMoveWeight);
            const silver = Math.min(s[i], maxMoveWeight);
            const total = Math.min(g[i] + s[i], maxMoveWeight);
            
            totalGold+=gold;
            totalSilver+=silver;
            totalGoldnSilver+=total;
        }
        if(totalGold>=a&&totalSilver>=b&&totalGoldnSilver>=a+b){
            answer=time;
            end=time-1;
        }else{
            start=time+1;
        }
    }
    
    return answer;
    
}