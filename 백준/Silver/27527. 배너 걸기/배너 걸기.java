import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        String[] secondLine = br.readLine().split(" ");
        int N = Integer.parseInt(line[0]);
        int M = Integer.parseInt(line[1]);
        int C = (int) Math.ceil((double) (9 * M) /10);
        int[] arr = new int[N];
        for(int i=0; i<N; i++){
            arr[i]=Integer.parseInt(secondLine[i]);
        }
        //초기
        Map<Integer,Integer> map = new HashMap<>();
        for(int i=0; i<M; i++){
            map.put(arr[i],map.getOrDefault(arr[i],0)+1);
        }

        for(Integer a : map.values()){
            if(a>=C){
                System.out.println("YES");
                return;
            }
        }

        for(int i=M; i<N; i++){
            int plus =i;
            int minus = i-M;
            map.put(arr[plus],map.getOrDefault(arr[plus],0)+1);
            map.put(arr[minus],map.get(arr[minus])-1);

            if(map.get(arr[plus])>=C) {
                System.out.println("YES");
                return;
            }
        }
        System.out.println("NO");
    }

}