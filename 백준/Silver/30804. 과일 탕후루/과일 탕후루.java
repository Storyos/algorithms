import java.io.*;
import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedList;

public class Main {
    static HashMap<Integer,Integer> fruitMap;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];
        String[] tmp = br.readLine().split(" ");
        for(int i=0; i<N; i++){
            arr[i]=Integer.parseInt(tmp[i]);
        }
        int answer = 0;
        int left = 0;
        fruitMap = new HashMap<>();
        for(int i=0; i<N; i++){
            fruitMap.put(arr[i], fruitMap.getOrDefault(arr[i], 0) + 1);
            while(fruitMap.size()>2){
                fruitMap.put(arr[left],fruitMap.get(arr[left])-1);
                if(fruitMap.get(arr[left])==0) fruitMap.remove(arr[left]);
                left++;
            }
            answer = Math.max(answer,i-left+1);
        }
        System.out.println(answer);


    }
}
