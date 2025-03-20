function solution(m, n, puddles) {
//     m : 가로  n : 세로
//     puddle : 못 가는곳
//     오른쪽과 아래쪽으로만 움직일 것 -> 갈수있는 모든 경우가 최단경로
    var dp = Array.from(Array(n+1),()=>new Array(m+1).fill(0));
    dp[1][1]=1;
    for(var p of puddles){
        dp[p[1]][p[0]]=-1;
    }
    
    for(let i=1; i<=m; i++){
        if(dp[1][i]===-1) break;
        dp[1][i]=1;
    }
    for(let i=1; i<=n; i++){
        if(dp[i][1]===-1) break;
        dp[i][1]=1;
    }
    
    var answer = 0;
    const d = 1000000007;
    for(let i=2; i<=n; i++){
        for(let j=2; j<=m; j++){
            if(dp[i][j]===-1){
            dp[i][j]=0;
            }
            else{
                if(dp[i-1][j]===-1) dp[i-1][j]=0;
                if(dp[i][j-1]===-1) dp[i][j-1]=0;
            dp[i][j]=((dp[i-1][j]%d)+(dp[i][j-1]%d))%d; 
            }
        }
    }
    return dp[n][m];
}

