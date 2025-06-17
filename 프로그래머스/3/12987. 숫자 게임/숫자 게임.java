import java.util.*;
class Solution {
    public int solution(int[] A, int[] B) {
        int answer = 0;
        Arrays.sort(A);
        Arrays.sort(B);
        int loseIdx = 0;
        int winIdx = B.length-1;
        for(int i=A.length-1; i>=0; i--){
            if(A[i]>=B[winIdx]){
                loseIdx++;
            }else{
                winIdx--;
                answer++;
            }
        }
        
        return answer;
        
    }
}