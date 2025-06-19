import java.util.*;
class Solution {
    static int[] parent;
    public int solution(int n, int[][] costs) {
        Arrays.sort(costs,(a,b)->a[2]-b[2]);
        int answer = 0;
        parent = new int[n];
        for(int i=0; i<n; i++){
            parent[i]=i;
        }
        for(int i=0; i<costs.length; i++){
            if(union(costs[i][0],costs[i][1])){
                answer+=costs[i][2];
            }
        }
        return answer;
    }
    static int find(int x){
        if(x==parent[x]) return x;
        return parent[x]=find(parent[x]);
        
    }
    
    static boolean union(int a, int b){
        int rootA = find(a);
        int rootB = find(b);
        if (rootA == rootB) return false; // 사이클 있음
        parent[rootB] = rootA;
        return true;
    };
    
}