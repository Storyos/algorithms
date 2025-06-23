import java.util.*;
class Solution {
    public int[] solution(String s) {
        int[] answer = new int[2];
        answer[0]=0;
        answer[1]=0;
        while(!s.equals("1")){
            int preLen = s.length();
            s=s.replaceAll("0","");
            answer[1]+=preLen-s.length();
            s = Integer.toBinaryString(s.length());
            answer[0]++;
        }
        return answer;
    }
}