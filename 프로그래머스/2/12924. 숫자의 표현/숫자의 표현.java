import java.util.*;
import java.io.*;
class Solution {
    public int solution(int n) {
        int answer = 0;
        
        //자연수 개수
        for(int i=1; i<=n; i++){
            for(int start = 1; start<=n; start++){
                int k = (start*2+i-1)*i/2;
                if(k>n) break;
                else if(k==n){
                answer++;
                }
            }
        }
        
        return answer;
    }
}