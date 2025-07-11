import java.util.*;
class Solution {
    public int[] solution(long begin, long end) {
        int size = (int)(end-begin);
        int[] answer = new int[size+1];
        for(int i=0; i<=size; i++){
            answer[i]=getD(begin+i);
        }
        return answer;
    }
    
    int getD(long num){
        if(num==1) return 0;
        long res = 1L;
        for(int i=2; i<=Math.sqrt(num); i++){
            if(num%(long)i==0){
                if(num/i<=10_000_000) res = Math.max(res,num/i); 
               else res = Math.max(res,i);
            }
        }
        return (int)res;
    }
    
}