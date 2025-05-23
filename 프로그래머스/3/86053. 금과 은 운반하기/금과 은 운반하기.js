//가장 빠른 시간 구하기 -> 시간을 중심으로..
function solution(a, b, g, s, w, t) {
    let size = g.length;
    var answer = -1;
    let start = 0;
    let end = -1;
    for(let i=0; i<size; i++){
        //(전체 무게 - 처음한번 들고간거)--> 왕복으로 왔다간 횟수 + 제일 처음에 편도
        const v = Math.ceil((g[i]+s[i]-w[i])/w[i])*t[i]*2+t[i];
        end = Math.max(end,v);
    }
    while(start<=end){
        let time = Math.floor((start+end)/2);
        let totalSilver =0;
        let totalGold = 0;
        let totalSum = 0;
        for(let i=0; i<size; i++){
            let comengo = t[i]*2;
            let movingCount = Math.floor(time/comengo);
            if(time%comengo>=t[i]) movingCount++;
            let weightLimit = movingCount*w[i];
//             w[i] : 한번에 옮길수있는 무게
            let silver = Math.min(s[i],weightLimit);
            let gold = Math.min(g[i],weightLimit);
            let total = Math.min(s[i]+g[i],weightLimit);   
            totalSilver+=silver;
            totalGold+=gold;
            totalSum+=total;
        }
        if(totalGold>=a&&totalSilver>=b&&totalSum>=a+b){
            answer=time;
            end=time-1;
        }else{
            start=time+1;
        }
    }
    
    return answer;
}