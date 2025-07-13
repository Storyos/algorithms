import java.util.*;

class Solution {
    public int solution(String name) {
        int answer = 0;
        int len = name.length()-1;

        for(int i=0 ; i<name.length(); i++){
            int goback = i;
        
            for(int j=i+1; j<name.length(); j++){
                if(name.charAt(j)!='A'){
                    goback = j;
                    break;
                }
            }
            len = goback==i?Math.min(len,i):Math.min(len,i*2+name.length()-goback);
            len = Math.min(len,i+(name.length()-goback)*2);
            
        }
        answer+=len; 
        
        for(int i=0; i<name.length(); i++){
            int code = (int)name.charAt(i);
            answer+=Math.min(91-code,code-65);
        }
        return answer;
    }
}