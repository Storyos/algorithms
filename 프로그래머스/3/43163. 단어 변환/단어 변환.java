import java.util.*;
class Solution {
    static private String target;
    static private String[] words;
    static private boolean[] visited;
    static int answer;
    public int solution(String begin, String target, String[] words) {
        this.target = target;
        this.words = words;
        this.visited = new boolean[words.length];
        answer = 0;
        dfs(begin,0);
        return answer;
    }
    static void dfs(String base, int count){
        if(base.equals(target)) answer = count;
        else{
            for(int i=0; i<words.length; i++){
                if(!visited[i]&&checkChangeable(base,words[i])){
                    visited[i]=true;
                    dfs(words[i],count+1);
                    visited[i]=false;
                }
            }
        }
    }
    static boolean checkChangeable(String base, String target){
        int count = 0;
        String[] baseStr = base.split("");
        String[] targetStr = target.split("");
        for(int i=0; i<baseStr.length; i++){
            count=baseStr[i].equals(targetStr[i])?count:count+1;
        }
        return count<=1?true:false;
    }
}