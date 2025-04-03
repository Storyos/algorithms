function solution(k, ranges) {
    
    var answer = [];
    var [graph,n] = makingwoobak(k);
    for(var range of ranges){
        var r = rearrange(range);
        answer.push(calcul(r));
    }
    return answer;
    
    
    function calcul(r){
        var [from,to] = r;
        var answer = 0.0;
        if(from===-1&&to===-1){
            return -1.0;
        }else if(from===to){
            return 0.0;
        }else{
            for(let i = from; i<to; i++){
                answer= answer + (graph[i]+graph[i+1])/2.0;
            }
        }
        return answer;
    }
    
    
    function rearrange(range){
        if(range[0]===0&&range[1]===0){
            return [0,n];
        }else if(range[1]<=0){
            if(n+range[1]<range[0]){
                return [-1,-1];
            }
            return [range[0],n+range[1]];
        }
        else{
            return range;
        }
    }
    
    function makingwoobak(k){
        var arr = [];
        var count = 0;
        arr.push(k);
        while(k!=1){
            if(k%2===0){
                k/=2;
            }else{
                k=k*3+1;
            }
         arr.push(k);
         count++;
        }
        return [arr,count];
    }
}