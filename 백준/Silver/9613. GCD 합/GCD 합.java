import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int testcase = Integer.parseInt(br.readLine());
        List<Integer[]> lists = new ArrayList<>();
        for(int t = 0; t<testcase; t++){
            String[] lines = br.readLine().split(" ");
            int n = Integer.parseInt(lines[0]);
            int[] nums = new int[n];
            for(int i=1; i<=n; i++){
                nums[i-1]=Integer.parseInt(lines[i]);
            }
            long[] sum = new long[1];
            combination(nums,sum,new Stack<Integer>(),0,0);
            System.out.println(sum[0]);
        }
    }
    static void combination(int[] arr, long[] sum, Stack<Integer> bucket, int start, int count){
        if(count==2) {
            sum[0] += getGCD(bucket.get(0),bucket.get(1));
        }else{
            for(int i=start; i<arr.length; i++){
                bucket.add(arr[i]);
                combination(arr,sum,bucket,i+1,count+1);
                bucket.pop();
            }
        }
    }
    static int getGCD(int a, int b){
        //b가 더큰거
        int tmp = b;
        if(a>b){
            b=a;
            a=tmp;
        }
        if(a==0) return b;
        else return getGCD(b%a,a);
    }
}
