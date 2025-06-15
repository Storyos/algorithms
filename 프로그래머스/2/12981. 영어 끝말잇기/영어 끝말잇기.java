import java.util.*;
class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = {0,0};
        Set<String> wordMap = new HashSet<String>();
        wordMap.add(words[0]);
        for(int i=1; i<words.length; i++){
            String[] tmp = words[i-1].split("");
            String t = tmp[tmp.length-1];
            if(wordMap.contains(words[i])||words[i].indexOf(t)!=0){
                answer[0]=(i+1)%n;
                answer[0]=answer[0]==0?n:answer[0];
                answer[1]=(int)Math.ceil((double)(i+1)/n);
                break;
            }else wordMap.add(words[i]);
        }
        
        return answer;
    }
}