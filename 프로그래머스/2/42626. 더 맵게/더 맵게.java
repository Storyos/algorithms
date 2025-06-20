import java.util.*;
class Solution {
    public int solution(int[] scoville, int K) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int s : scoville){
            pq.add(s);
        }
        int answer = -1;
        int tmp = 0;
        while(!pq.isEmpty()){
            int first = pq.poll();
            if(first>=K) return tmp;
            if(pq.isEmpty()) return -1;
            int second = pq.poll();
            pq.add(first+(second*2));
            tmp++;
        }
        return answer;
    }
}