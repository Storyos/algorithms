import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int x = Integer.parseInt(br.readLine());
        if(x==1){
            System.out.println("0");
            return;
        }
        int[] dp = new int[x+1];
        dp[1]=0;
        dp[2]=1;
        for(int i=2;i<=x; i++)
        {
            dp[i]=dp[i-1];
            if(i%2==0)
            {
                dp[i]=Math.min(dp[i],dp[i/2]);
            }
            if(i%3==0)
            {
                dp[i]=Math.min(dp[i],dp[i/3]);
            }
            dp[i]++;
            //System.out.println("dp["+i+"] : "+dp[i]);
        }
        System.out.println(dp[x]);

    }
}
