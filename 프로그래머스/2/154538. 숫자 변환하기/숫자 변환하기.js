function solution(x, y, n) {
    var answer = 0;
//     1번 x+n
//     2번 x*2
//     3번 x*3
    let dp = new Array(y+1).fill(1000000);
    dp[x]=1;
    for(let i=x; i<=y; i++){
        dp[i+n] = Math.min(dp[i]+1,dp[i+n]);
        dp[i*2] = Math.min(dp[i]+1,dp[i*2]);
        dp[i*3] = Math.min(dp[i]+1,dp[i*3]);   
    } 
    return dp[y]==1000000?-1:dp[y]-1;
}