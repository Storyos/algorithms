import java.util.*;
class Solution
{
    public int solution(String s)
    {
        int answer = -1;
        Stack<Character> stack = new Stack<>();
        for(int i=0; i<s.length(); i++){
            Character c = s.charAt(i);
            if(stack.isEmpty()||!stack.peek().equals(c)){
                stack.add(c);
            }else{
                stack.pop();
            }
        }
        return stack.isEmpty()?1:0;
    }
}