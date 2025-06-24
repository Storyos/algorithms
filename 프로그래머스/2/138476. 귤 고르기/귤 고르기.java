import java.util.*;
class Solution {
    public int solution(int k, int[] tangerine) {
        int answer =0;
        HashMap<Integer,Integer> tMap = new HashMap<>();
        for(Integer t : tangerine){
            tMap.put(t,tMap.getOrDefault(t,0)+1);
        }
        List<Integer> vSet = new ArrayList<>(tMap.values());
        Collections.sort(vSet,(a,b)->b-a);
        for(Integer tan : vSet){
            k-=tan;
            answer++;
            if(k<=0) break;
        }
        return answer;
    }
}