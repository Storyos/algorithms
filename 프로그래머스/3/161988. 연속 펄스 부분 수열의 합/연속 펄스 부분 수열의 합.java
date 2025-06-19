import java.util.*;
class Solution {
    public long solution(int[] sequence) {
        long[] dp = new long[sequence.length];
        dp[0]=sequence[0];
        for(int i=1; i<sequence.length; i++){
            int sign = i%2==1?-1:1;
            dp[i]=dp[i-1]+(sequence[i]*sign);
        }
        Arrays.sort(dp);
        long bigger = Math.max(Math.abs(dp[0]),Math.abs(dp[dp.length-1]));
        bigger = Math.max(bigger,Math.abs(dp[dp.length-1]-dp[0]));
        
        return bigger;
    }
}