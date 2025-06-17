import java.util.*;
class Solution {
    public long solution(int n, int[] works) {
        long answer = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for(int w : works) pq.add(w);
        while(n>0&&!pq.isEmpty()){
            int w = pq.poll()-1;
            if(w>0) pq.add(w);
            n--;
        }
        for(int a : pq){
            answer+=(long)a*a;
        }
        return answer;
    }
}