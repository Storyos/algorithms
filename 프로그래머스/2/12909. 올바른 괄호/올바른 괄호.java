import java.util.*;

class Solution {
    boolean solution(String s) {
        int left = 0;
        int right = 0;
        String[] str = s.split("");
        for(int i=0; i<str.length; i++){
            if(str[i].equals("(")) left++;
            else right++;
            if(right>left){
                return false;
            }
        }
        return left==right;
    }
}