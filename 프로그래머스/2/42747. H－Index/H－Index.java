import java.util.*;
class Solution {
    public int solution(int[] citations) {
        Arrays.sort(citations);
        int answer = citations[0];
        
        int start = 0;
        int end = citations[citations.length-1];
        int middle;
        while(start<=end){
            int count = 0;
            middle = (int)Math.floor((start+end)/2);
            for(int i=citations.length-1; i>=0; i--){
                if(citations[i]>=middle) count++;   
                else break;
            }
            if(middle<=count){
                answer=middle;
                start=middle+1;
            }else{
                end=middle-1;
            }
        }
        return answer;
    }
}