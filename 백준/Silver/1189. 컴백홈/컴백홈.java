import java.util.*;
import java.io.*;

public class Main {
    static String[][] arr;
    static int[][] dir ={{1,0},{0,1},{-1,0},{0,-1}};
    static int r,c,k;
    static int answer = 0;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] first = br.readLine().split(" ");
         r = Integer.parseInt(first[0]);
         c = Integer.parseInt(first[1]);
         k = Integer.parseInt(first[2]);
        arr = new String[r][];
        for(int i=0; i<r; i++){
            arr[i]=br.readLine().split("");
        }
        boolean[][] visited = new boolean[r][c];
        visited[r-1][0]=true;
        dfs(r-1,0,visited,1);
        System.out.println(answer);
    }

    static void dfs(int y, int x, boolean[][] visited, int distance){
        if(x==c-1&&y==0){
            if(distance==k) {
                answer++;
            }
        } else if(distance<k){
            for(int i=0; i<4; i++){
                int dy = y+dir[i][0];
                int dx = x+dir[i][1];
                if(dx>=0&&dy>=0&&dx<c&&dy<r
                        &&!visited[dy][dx]
                        &&arr[dy][dx].equals(".")){
                    visited[dy][dx]=true;
                    dfs(dy,dx,visited,distance+1);
                    visited[dy][dx]=false;
                }
            }
        }
    }
}