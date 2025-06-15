import java.util.*;
class Solution {
    public int solution(int[] elements) {
        int answer = 0;
        Set<Integer> numSet = new HashSet<>();
        int[] dp = new int[elements.length];
        for(int i=0; i<elements.length; i++){
            dp[i]=elements[i];
            numSet.add(dp[i]);
            for(int j=i+1; j<i+elements.length; j++){
                dp[i]+=elements[j%elements.length];
                numSet.add(dp[i]);
            }
        }

        return numSet.size();
    }
}