import java.util.*;
class Solution {
    static int N;
    static int[][] cost;
    static int[][] dir={{0,1},{1,0},{-1,0},{0,-1}};
    public int solution(int[][] board) {
        N= board.length-1;
        cost = new int[N+1][N+1];
        for(int i=0; i<=N; i++){
            Arrays.fill(cost[i],Integer.MAX_VALUE);
        }
        dfs(0,0,board,-1,0);
        int answer = 0;
        return cost[N][N];
    }
    static void dfs(int x, int y,int[][] board, int lstDir, int price){
        if(x==N&&y==N){
            cost[y][x] = Math.min(cost[y][x],price);
            return;
        }else{
            for(int i=0; i<4; i++){
                int dy = y+dir[i][0];
                int dx = x+dir[i][1];
                if(dy>=0&&dx>=0&&dy<=N && dx<=N && board[dy][dx]!=1){
                    int newCost = (lstDir==i || lstDir ==-1)?price+100:price+600;
                    if(newCost<=cost[dy][dx]){
                        cost[dy][dx]=newCost;
                        dfs(dx,dy,board,i,newCost);
                    }
                }
            }
        }
    }
}