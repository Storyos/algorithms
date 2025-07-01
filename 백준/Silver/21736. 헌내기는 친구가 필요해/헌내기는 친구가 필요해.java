import java.util.*;
import java.io.*;

public class Main {
        final static int[][] dir ={{0,1},{1,0},{-1,0},{0,-1}};
        static int n,m;
        static int answer = 0;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] line = br.readLine().split(" ");
         n = Integer.parseInt(line[0]);
         m = Integer.parseInt(line[1]);
        String[][] map = new String[n][m];
        int x=0,y=0;
        boolean[][] visited = new boolean[n][m];
        for(int i=0; i<n; i++){
            String l = br.readLine();
            if(l.indexOf('I')!=-1){
                x=l.indexOf('I');
                y=i;
            }
            map[i] = l.split("");
        }
        dfs(x,y,visited,map);
        System.out.println(answer==0?"TT":answer);

    }
    static void dfs(int x,int y,boolean[][] visited, String[][] map){
        visited[y][x]=true;
        if(map[y][x].equals("P")) answer++;
        for(int i=0; i<4; i++){
            int dx = x+dir[i][0];
            int dy = y+dir[i][1];
            if(dx>=0&&dy>=0&&dy<n&&dx<m&&!map[dy][dx].equals("X")&&!visited[dy][dx]){
                dfs(dx,dy,visited,map);
            }
        }
    }
}
