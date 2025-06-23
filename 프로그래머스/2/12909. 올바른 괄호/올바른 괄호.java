
class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int count = 0;
        String[] tmp = s.split("");
        for(int i=0; i<tmp.length; i++){
            if(tmp[i].equals("(")) count++;
            else{
                if(count==0) return false;
                else count--;
            }
        }
        return count==0;
    }
}