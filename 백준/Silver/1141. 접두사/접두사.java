import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int answer = N;
        String[] lines = new String[N];
        for(int i=0; i<N; i++){
            lines[i] = br.readLine();
        }
        Arrays.sort(lines,(a,b)->a.length()-b.length());
        for(int i=0; i<N; i++){
            for(int j= i+1; j<N; j++){
                if(lines[j].startsWith(lines[i])){
                    answer--;
                    break;
                }
            }
        }
        System.out.println(answer);
    }
}