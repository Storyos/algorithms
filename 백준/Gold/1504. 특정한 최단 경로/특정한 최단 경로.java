import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.PriorityQueue;

public class Main {
    static PriorityQueue<Integer[]> pq;
    static int N;
    static int[][] graph;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] tmp = br.readLine().split(" ");
        N = Integer.parseInt(tmp[0]);
        int E = Integer.parseInt(tmp[1]);
        graph = new int[N+1][N+1];
        for(int i=0; i<=N; i++){
            Arrays.fill(graph[i],100000000);
        }
        for(int i=1; i<=N; i++) graph[i][i]=0;
        for(int i=0; i<E; i++){
            String[] line = br.readLine().split(" ");
            int a = Integer.parseInt(line[0]);
            int b = Integer.parseInt(line[1]);
            int c = Integer.parseInt(line[2]);
            graph[a][b]=c;
            graph[b][a]=c;
        }
        String[] line = br.readLine().split(" ");
        int v1 = Integer.parseInt(line[0]);
        int v2 = Integer.parseInt(line[1]);

        // cost(1,v1)+cost(v2,N)+graph(v1,v2)
        // 또는 cost(1,v2)+cost(v1,N)+graph(v1,v2)
        int[] dist1 = getDistance(1);
        int[] distv1 = getDistance(v1);
        int[] distv2 = getDistance(v2);
        long path1 = (long)dist1[v1]+distv1[v2]+distv2[N];
        long path2 = (long)dist1[v2]+distv2[v1]+distv1[N];
        long answer = Math.min(path1,path2);
        if(answer>=100000000) System.out.println("-1");
        else System.out.println(answer);


    }
    static int[] getDistance(int start){
        pq = new PriorityQueue<>((a,b)->a[1]-b[1]);
        for(int i=1; i<=N; i++){
            pq.add(new Integer[]{i,graph[start][i]});
        }
        int[] distance = Arrays.copyOf(graph[start], N+1);

        while(!pq.isEmpty()){
            Integer[] nodeInfo = pq.poll();
            int curNode = nodeInfo[0];
            int curCost = nodeInfo[1];
            for(int i=1; i<=N; i++){
                if(graph[curNode][i]+curCost<distance[i]){
                    distance[i]=Math.min(distance[i],graph[curNode][i]+curCost);
                    pq.add(new Integer[]{i,graph[curNode][i]+curCost});
                }
            }
        }
        return distance;
    }
}
