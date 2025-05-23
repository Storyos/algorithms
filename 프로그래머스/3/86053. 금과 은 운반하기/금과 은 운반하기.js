//필요한 금이랑 은 무게 -> a,b
//g,s : 각 배열에 있는 금 개수

function solution(a, b, g, s, w, t) {
    const size = g.length;
    let answer = -1;
    let start = 0;
    let end = -1;
    const arr = [];
    for(var i=0; i<g.length; i++){
        const v = Math.ceil((g[i]+s[i]-w[i])/w[i])*t[i]*2+t[i];
        end = Math.max(v,end);
    }
    while(start<=end){
        let time = Math.floor((start+end)/2);
        let totalGold = 0;
        let totalSilver = 0;
        let total = 0;
        for(let i=0; i<size; i++){
            let 왕복 = t[i] *2;
            let moveCount = Math.floor(time/왕복)
            //첫 편도생각했을때 한번더 가능한거면
            if(time%왕복>=t[i]) moveCount++;
            let moveWeight = moveCount * w[i];
            
            totalGold+=Math.min(g[i],moveWeight);
            totalSilver+=Math.min(s[i],moveWeight)
            total+=Math.min(g[i]+s[i],moveWeight);
        }
        if(totalGold>=a&&totalSilver>=b&&total>=a+b){
            answer=time;
            end=time-1;
        }else{
            start=time+1;
        }
    }
    
    return answer;
}