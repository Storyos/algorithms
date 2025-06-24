import java.util.*;
class Solution {
    public int solution(int[] people, int limit) {
        //무조건 한번에 두명
        int answer = people.length;
        Arrays.sort(people);
        boolean[] visited = new boolean[people.length];
        int lstIdx = 0;
        for(int i=people.length-1; i>=0; i--){
            if(visited[i])break;
            visited[i]=true;
            if(i!=lstIdx&&people[i]+people[lstIdx]<=limit){
                visited[lstIdx]=true;
                lstIdx++;
                answer--;
            }
        }
        return answer;
    }
}