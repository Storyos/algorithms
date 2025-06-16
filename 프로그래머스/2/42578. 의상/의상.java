import java.util.*;
class Solution {
    public int solution(String[][] clothes) {
        int answer = 1;
        HashMap<String,Integer> cMap = new HashMap<String,Integer>();
        for(String[] s : clothes){
            String type = s[1];
            cMap.put(type,cMap.getOrDefault(type,0)+1);
        }
        for(String key : cMap.keySet()){
            answer*=cMap.get(key)+1;
        }
        return answer-1;
    }
}