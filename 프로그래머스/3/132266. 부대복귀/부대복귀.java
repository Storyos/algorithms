import java.util.*;
class Solution {
    public int[] solution(int n, int[][] roads, int[] sources, int destination) {
        
        HashMap<Integer,List<Integer>> mapInfo = new HashMap<>();
        for(int[] road : roads){
            mapInfo
                .computeIfAbsent(road[0],k->new ArrayList<>())
                .add(road[1]);
            mapInfo
                .computeIfAbsent(road[1],k->new ArrayList<>())
                .add(road[0]);
        }
        Integer[] distance = new Integer[n+1];
        Arrays.fill(distance,Integer.MAX_VALUE);
        distance[destination]=0;
        Queue<Integer[]> queue = new LinkedList<>();
        queue.add(new Integer[]{destination,0});
        while(!queue.isEmpty()){
            Integer[] info = queue.poll();
            distance[info[0]]=Math.min(info[1],distance[info[0]]);
            for(Integer nextNode : mapInfo.get(info[0])){
                if(distance[nextNode]>info[1]+1)
                queue.add(new Integer[]{nextNode,info[1]+1});
            }
        }

        int[] answer = new int[sources.length];
        for(int i=0; i<sources.length; i++){
            answer[i] = distance[sources[i]]==Integer.MAX_VALUE?-1:distance[sources[i]];
        }
        return answer;
    }
}