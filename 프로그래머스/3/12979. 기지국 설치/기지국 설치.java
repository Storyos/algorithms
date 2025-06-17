import java.util.*;
class Solution {
    public int solution(int n, int[] stations, int w) {
        int answer = 0;
        int startIdx = 1;
        int endIdx = 0;
        for(int s : stations){
            endIdx = s-w-1;
            double d = (double)(endIdx-startIdx+1)/(2*w+1);
            if(startIdx<=endIdx) answer += (int)Math.ceil(d);
            startIdx=s+w+1;
        }
        if(startIdx<=n) answer+=Math.ceil((double)(n-startIdx+1)/(2*w+1));
        return answer;
    }
}