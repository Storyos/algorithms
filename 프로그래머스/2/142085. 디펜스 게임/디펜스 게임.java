import java.util.*;
class Solution {
    public int solution(int n, int k, int[] enemy) {
        PriorityQueue<Integer> saved = new PriorityQueue<Integer>(Collections.reverseOrder());
        int round = 0;
        for(int e : enemy){
            //막을수있으면 막음
            saved.add(e);
            if(n>=e){
                n-=e;
            }else if(k>0){
                n+=saved.poll();
                n-=e;
                k--;
            }else return round;
            round++;
        }
        
        return round;
    }
}