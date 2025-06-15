import java.util.*;
class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int answer = 0;
        HashMap<String,Integer> wishMap = new HashMap<String,Integer>();
        for(int i=0; i<want.length; i++){
            wishMap.put(want[i],number[i]);
        }
        //init 작업
        for(int i=0; i<10; i++){
            if(wishMap.containsKey(discount[i])){
            wishMap.replace(discount[i],wishMap.get(discount[i])-1);
            }
        }
        boolean valid = true;
            for(String key : wishMap.keySet()){
                if(wishMap.get(key)>0){
                    valid=false;
                    break;
                }
        }
            if(valid){
            answer++;
        }
        if(discount.length==10) return answer;
        
        for(int tail=10; tail<discount.length; tail++){

            if(wishMap.containsKey(discount[tail-10])){   
                wishMap.replace(discount[tail-10],wishMap.get(discount[tail-10])+1);
            }   
            if(wishMap.containsKey(discount[tail])){
            wishMap.replace(discount[tail],wishMap.get(discount[tail])-1);
            }
            valid = true;
            for(String key : wishMap.keySet()){
                if(wishMap.get(key)>0){
                    valid=false;
                    break;
                }
            }
            if(valid) answer++;
        }
        
        return answer;
    }
}