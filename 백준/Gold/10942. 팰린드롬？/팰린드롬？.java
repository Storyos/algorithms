import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int[] nums = new int[N];
        String[] tmp = br.readLine().split(" ");
        for (int i = 0; i < N; i++) {
            nums[i] = Integer.parseInt(tmp[i]);
        }

        int[][] dp = new int[N][N];

        // 길이 1 팰린드롬
        for (int i = 0; i < N; i++) {
            dp[i][i] = 1;
        }
        // 길이 2 이상 팰린드롬
        for (int len = 2; len <= N; len++) {
            for (int start = 0; start <= N - len; start++) {
                int end = start + len - 1;
                if (nums[start] == nums[end]) {
                    if (len == 2) {
                        dp[start][end] = 1;
                    } else if (dp[start + 1][end - 1] == 1) {
                        dp[start][end] = 1;
                    }
                }
            }
        }

        int M = Integer.parseInt(br.readLine());
        for (int i = 0; i < M; i++) {
            String[] range = br.readLine().split(" ");
            int from = Integer.parseInt(range[0]);
            int to = Integer.parseInt(range[1]);
            bw.write(dp[from - 1][to - 1] + "\n");
        }

        bw.flush();
        bw.close();
    }
}
