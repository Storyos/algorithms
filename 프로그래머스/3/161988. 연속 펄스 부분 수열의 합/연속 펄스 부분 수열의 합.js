// 결국 연속 수열 * 펄스수열
// slidingwindow?
function solution(sequence) {
    var dp = [];
    dp.push(sequence[0]);
    for(var i=1; i<sequence.length; i++){
        var sign = i%2===0?1:-1;
        dp[i]=dp[i-1]+(sequence[i]*sign);
    }
    dp.sort((a,b)=>a-b);
    var answer = Math.max(Math.abs(dp[0]-dp[dp.length-1]),Math.abs(dp[0]),Math.abs(dp[dp.length-1]));
    
    return answer;
}