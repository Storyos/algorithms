import java.util.*;
class Solution {
    public int solution(int[][] triangle) {
        int answer = 0;
        int h = triangle.length;
        int[][] dp = new int[h][h];
        for(int i=0; i<h; i++){
            Arrays.fill(dp[i],0);
        }
        dp[0][0]=triangle[0][0];
        for(int i=1; i<h; i++){
            dp[i][0]=dp[i-1][0]+triangle[i][0];
            for(int j=1; j<i+1; j++){
                dp[i][j]=Math.max(dp[i-1][j]+triangle[i][j],dp[i-1][j-1]+triangle[i][j]);
            }
        }
        for(int a : dp[h-1]) answer = Math.max(a,answer);
        return answer;
    }
}