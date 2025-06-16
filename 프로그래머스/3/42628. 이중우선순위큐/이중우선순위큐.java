import java.util.*;
class Solution {
    public int[] solution(String[] operations) {
        int[] answer = {0,0};
        PriorityQueue<Integer> minpq = new PriorityQueue<>();
        PriorityQueue<Integer> maxpq = new PriorityQueue<>(Collections.reverseOrder());
        
        for(String op : operations){
            String[] cmd = op.split(" ");
            String type = cmd[0];
            Integer num = Integer.parseInt(cmd[1]);
            
            if(type.equals("I")){
                minpq.add(num);
                maxpq.add(num);
            }else{
                if(num==1 &&!minpq.isEmpty()&&!maxpq.isEmpty()) {
                    minpq.remove(maxpq.poll());    
                }
                else if(num==-1&&!minpq.isEmpty()&&!maxpq.isEmpty()) {
                    maxpq.remove(minpq.poll());
                }
            }
        }
        if(!maxpq.isEmpty()){
        answer[0]=maxpq.poll();
        answer[1]=minpq.poll();
        }
        return answer;
    }
}