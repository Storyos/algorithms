import java.util.*;
class Solution {
    public long solution(int[] sequence) {
        final int len = sequence.length; 
        long[] acc1 = new long[len];
        acc1[0] = sequence[0];
        for(int i=1; i<len; i++){
            acc1[i]=i%2==0?acc1[i-1]+sequence[i]:acc1[i-1]+sequence[i]*(-1);
        }
        Arrays.sort(acc1);
        long answer = 0;
        answer = Math.max(Math.abs(acc1[0]),Math.abs(acc1[len-1]));
        answer = Math.max(answer,Math.abs(acc1[0]-acc1[len-1]));
        return answer;
    }
}