function solution(number, k) {
    var answer = '';
    const len = number.length;
    let maxI;
    for(let idx = 0; idx<len; idx=maxI+1){
        let max = number[idx];
        maxI =  idx;
        let end = k+idx;
        for(let i = idx; i<=end; i++){
            if(max<number[i]){
                max = number[i];
                maxI = i;
            }
            if(max==='9') break;
        }
        if(len-idx===k){
            break;
        }        
        k = k - (maxI-idx);
        answer+=max;
    }
    return answer;
}
