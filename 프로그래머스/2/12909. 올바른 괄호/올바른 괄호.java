
class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int count = 0;
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i)=='(') count++;
            else{
                if(count==0) return false;
                else count--;
            }
        }
        return count==0;
    }
}