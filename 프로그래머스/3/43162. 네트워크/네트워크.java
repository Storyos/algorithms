class Solution {
    static boolean[] visited;
    public int solution(int n, int[][] computers) {
        visited = new boolean[n];
        int answer = 0;
        for(int i=0; i<n; i++){
            if(!visited[i]) {
                dfs(i,computers);
                answer++;
            }
        }
        return answer;
    }
    static void dfs(int n,int[][] computers){
        visited[n]=true;
        for(int i=0; i<computers.length; i++){
            if(n!=i&&computers[n][i]==1&&!visited[i]){
                dfs(i,computers);
            }
        }
    } 
}