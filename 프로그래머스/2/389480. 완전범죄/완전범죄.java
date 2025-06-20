import java.util.*;
class Solution {
    public int solution(int[][] info, int n, int m) {
        //결국 A도둑이 남긴 흔적의 누적 개수의 최솟값
        int[][] dp = new int[info.length+1][m+1];
        for(int i=0; i<=info.length; i++){
            Arrays.fill(dp[i],100000);
        }
        int answer = dp[1][0];
        dp[0][0]=0;
        for(int i=1; i<=info.length; i++){
            int a = info[i-1][0];
            int b = info[i-1][1];
            for(int j=0; j<=m; j++){
                //a가 훔쳤을 경우
                dp[i][j]=Math.min(dp[i][j],dp[i-1][j]+a);
                //b가 훔칠수 있으면
                if(j+b<m){
                    dp[i][j+b]= Math.min(dp[i][j+b],dp[i-1][j]);
                }
            }
        }
        for(int i=0; i<=m; i++){
            answer = Math.min(answer,dp[info.length][i]);
        }
        return answer>=n?-1:answer;
    }
}