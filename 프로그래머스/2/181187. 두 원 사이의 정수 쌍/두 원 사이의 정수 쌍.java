import java.util.*;
import java.io.*;

class Solution {
    public long solution(int r1, int r2) {
        long answer = 0;
        for(int x1 = 1; x1<=r2; x1++){
            long y1 = (long)Math.sqrt((long)r2*r2-(long)x1*x1);
            long y2 = (long)Math.ceil(Math.sqrt((long)r1*r1-(long)x1*x1));
            answer+=y1-y2+1;
        }
        answer*=4;
        
        
        return answer;
    }
}