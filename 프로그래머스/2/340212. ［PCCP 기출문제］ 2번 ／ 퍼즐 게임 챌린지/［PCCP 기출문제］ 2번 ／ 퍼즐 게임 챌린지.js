function solution(diffs, times, limit) {
    let answer = 0;
    let left ,right;
    if(getTime(0)<=limit) return 1;
    let set = new Set(diffs);
    let levels = [...set.values()].sort((a,b)=>a-b);
    if(levels.length===1) return diffs[0];
    
    let leftidx = 0;
    let rightidx = levels.length-1;
    
    while(leftidx<=rightidx){
        let middleidx = Math.floor((leftidx+rightidx)/2);
        let semiResult= getTime(levels[middleidx]);
        if(semiResult>limit){
            leftidx = middleidx+1;
        }else if(semiResult===limit){
            return levels[middleidx];
        }else{
            let tmp = getTime(levels[middleidx-1]);
            if(tmp>limit) {
                left = levels[middleidx-1]+1;
                right = levels[middleidx];
                break;
            }
            else if(tmp===limit){
                return levels[middleidx-1];
            }else{
                rightidx=middleidx-1;
            }
        }
    }
    
    
    
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        let result = getTime(middle);
        //결과 초과 시
        if(result>limit){
            left = middle+1;
        }else if(result===limit){
            return middle;
        }else{
            let midsub = getTime(middle-1);
            // middle-1도 널널하면
            if(midsub<limit){
                right = middle-1;
            }
            // middle-1은 limit을 초과시
            else if(midsub>limit) return middle;
            else return middle-1;
            }
    }
    function getTime(level){
        let tp = 0;
        let spendTime = 0; 
        for(let i=0; i<diffs.length; i++){
            if(level<diffs[i]){
             spendTime += (diffs[i]-level)*(times[i]+tp)+times[i];   
            }else{
                spendTime+=times[i];
            }
            tp=times[i];
        }
        return spendTime;
    }
    
    return answer;
}