import java.util.*;
class Solution {
    public int[] solution(int n, int s) {
        int[] answer=new int[n];
        if(n>s) return new int[]{-1};
        
        Arrays.fill(answer,s/n);
        int mod = s%n;
        for(int i=0; i<n; i++){
            if(mod==0) break;
            answer[i]++;
            mod--;
        }
        
        Arrays.sort(answer);
        return answer;
    }
}