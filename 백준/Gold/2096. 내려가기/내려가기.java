import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int[][] maxdp = new int[N][3];
        int[][] mindp = new int[N][3];
        int[][] arr = new int[N][3];
        for(int i=0; i<N; i++){
            String[] tmp = br.readLine().split(" ");
            for(int j=0; j<3; j++){
                arr[i][j]=Integer.parseInt(tmp[j]);
            }
        }
        maxdp[0]=arr[0];
        mindp[0]=arr[0];
        for(int i=1; i<N; i++){
            for(int j=0; j<3; j++){
                if(j==0){
                    mindp[i][j]=Math.min(mindp[i-1][0],mindp[i-1][1])+arr[i][j];
                    maxdp[i][j]=Math.max(maxdp[i-1][0],maxdp[i-1][1])+arr[i][j];
                }else if(j==1){
                    mindp[i][j]=getMaxMin(mindp[i-1])[1]+arr[i][j];
                    maxdp[i][j]=getMaxMin(maxdp[i-1])[0]+arr[i][j];
                }else{
                    mindp[i][j]=Math.min(mindp[i-1][1],mindp[i-1][2])+arr[i][j];
                    maxdp[i][j]=Math.max(maxdp[i-1][1],maxdp[i-1][2])+arr[i][j];
                }
            }
        }
        System.out.print(getMaxMin(maxdp[N-1])[0]+" "+getMaxMin(mindp[N-1])[1]);




    }
    static int[] getMaxMin(int[] arr){
        int[] value = {0,Integer.MAX_VALUE};
        for(int i=0; i<arr.length; i++){
            value[0]=Math.max(value[0],arr[i]);
            value[1]=Math.min(value[1],arr[i]);
        }
        return value;
    }
}
