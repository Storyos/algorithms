import java.util.*;
import java.io.*;

public class Main {
    static int[][] dir = {
            {1,0},
            {0,1},
            {-1,0},
            {0,-1}
    };
    static int count  = 0;
    static int N,M;
    static String[][] arr;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        N = Integer.parseInt(line[0]);
        M = Integer.parseInt(line[1]);
        arr = new String[M][];
        boolean[][] visited = new boolean[M][N];
        for(int i=0; i<M; i++){
            arr[i] = br.readLine().split("");
        }
        int W=0,B=0;
        for(int i=0; i<M; i++){
            for(int j=0; j<N; j++){
                count=0;
                if(!visited[i][j]){
                    visited[i][j]=true;
                    dfs(j,i,visited,arr[i][j]);
                    if(arr[i][j].equals("W")){
                        W+=(count*count);
                    }else {
                        B+=(count*count);
                    }
                }
            }
        }
        System.out.println(W+" "+B);

    }
    static void dfs(int x, int y, boolean[][] visited, String target){
        count++;
        for(int i=0; i<4; i++){
            int dx = x+dir[i][0];
            int dy = y+dir[i][1];
            if(dx>=0&&dy>=0&&dx<N&&dy<M&&!visited[dy][dx]&&arr[dy][dx].equals(target)){
                visited[dy][dx]=true;
                dfs(dx,dy,visited,target);
            }
        }
    }
}