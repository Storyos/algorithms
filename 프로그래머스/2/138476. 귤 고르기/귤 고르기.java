import java.util.*;
class Solution {
    public int solution(int k, int[] tangerine) {
        int answer = 0;
        HashMap<Integer,Integer> tMap = new HashMap<Integer,Integer>();
        
        for(int t:tangerine){
            tMap.put(t,tMap.getOrDefault(t,0)+1);
        }
        
        List<Integer> arr = new ArrayList<>(tMap.values());
        arr.sort(Collections.reverseOrder());
        int sum = 0;
        for(int a : arr){
            sum+=a;
            answer++;
            if(sum>=k) break;
        }
        
        
        return answer;
    }
}