import java.util.*;
class Solution {
    public int solution(String s) {
        int answer = 0;
        String[] tmp = s.split("");
        Queue<String> queue = new LinkedList<String>();

        //init
        for(int i=0; i<tmp.length; i++){
            queue.add(tmp[i]);
        }
        
        for(int i=0; i<tmp.length; i++){
            String[] sarr = queue.toArray(new String[0]);
            answer = isValid(sarr)?answer+1:answer;
            queue.add(queue.poll());
        }
        return answer;
    }
    
    static boolean isValid(String[] s){
        Stack<String> tmpStack = new Stack<>();
        for(int i=0; i<s.length; i++){
            if(s[i].equals(")")){
                if(tmpStack.isEmpty()) return false;
                if(!tmpStack.pop().equals("(")) return false;                    
            }else if(s[i].equals("]")){
                if(tmpStack.isEmpty()) return false;
                if(!tmpStack.pop().equals("[")) return false;                                    
            }else if(s[i].equals("}")){
                if(tmpStack.isEmpty()) return false;
                if(!tmpStack.pop().equals("{")) return false;                    
            }else{
                tmpStack.push(s[i]);
            }
        }
        return tmpStack.isEmpty();
    }
}