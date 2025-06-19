import java.util.*;
class Solution {
    List<Integer>[] graph;
    int[] cost; 
    public int[] solution(int n, int[][] roads, int[] sources, int destination) {
        graph = new List[n+1];
        
        for(int i=0; i<=n; i++){
            graph[i] = new ArrayList<>();
        }
        for(int[] data : roads){
            graph[data[0]].add(data[1]);
            graph[data[1]].add(data[0]);
        }

        cost= new int[n+1];
        Arrays.fill(cost,Integer.MAX_VALUE);
        
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        queue.add(destination);
        cost[destination]=0;
        int count = 0;
        while(!queue.isEmpty()){
            int curNode = queue.poll();
            for(int nextNodes : graph[curNode] ){
                if(cost[nextNodes]>cost[curNode]+1){
                    cost[nextNodes]=cost[curNode]+1;
                    queue.add(nextNodes);
                }
            }
        }
        int[] answer = new int[sources.length];
        for(int i=0; i<sources.length; i++){
            answer[i]=cost[sources[i]]==Integer.MAX_VALUE?-1:cost[sources[i]];
        }
        
        return answer;
    }
}