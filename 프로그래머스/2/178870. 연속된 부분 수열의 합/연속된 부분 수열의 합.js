function solution(sequence, k) {
    let answer = [0,sequence.length];
    let sum = sequence[0];
    let start = 0, end = 0;
    
    while(start<sequence.length && end<sequence.length){
        if(sum===k){
            if((end-start)<(answer[1]-answer[0])){
                answer = [start,end];
            }
            sum-=sequence[start];
            start++;
        }else if(sum>k){
//        합계가 k 보다 더 클경우
            sum-=sequence[start];
            start++;
        }else{
            end++;
            sum+=sequence[end];
        }
    }
    return answer;
}