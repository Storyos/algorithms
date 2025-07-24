import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line1 = br.readLine().split(" ");
        String[] line2 = br.readLine().split(" ");
        int N = Integer.parseInt(line1[0]);
        int B = Integer.parseInt(line1[1]);
        int A = Integer.parseInt(line1[2]);

        int[] arr = new int[N];
        for(int i=0; i<line2.length; i++){
            arr[i] = Integer.parseInt(line2[i]);
        }
        Arrays.sort(arr);
        System.out.println(getMax(arr,B,A));
    }
    static int getMax(int[] arr,int B, int A){
        boolean[] visited = new boolean[arr.length];
        int count = 0;
        long cost = 0;
        for(int i=0; i<arr.length; i++){
            if(cost+arr[i]<=B){
                cost+=arr[i];
                count++;
            }
            // 못 살때
            else if(A>0){
                //남은 예산 cost-B
                int idx = i;
                while(cost+arr[i]>B&&idx>=0&&A>0){
                    if(visited[idx]) idx--;
                    else {
                        visited[idx]=true;
                        cost -= arr[idx] / 2;
                        A--;
                        idx--;
                    }
                }
                if(cost+arr[i]<=B){
                    cost+=arr[i];
                    count++;
                }else break;
            }
//            System.out.println("i = " + i);
//            System.out.println("cost = " + cost);
//            System.out.println("count = " + count);
//            System.out.println("--------------");
        }
        return count;
    }
}