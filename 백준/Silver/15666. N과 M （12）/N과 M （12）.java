import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    static String[] arr;
    static Set<String> set = new HashSet<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] line = br.readLine().split(" ");
        int N = Integer.parseInt(line[0]);
        int M = Integer.parseInt(line[1]);
        arr=br.readLine().split(" ");
        List<String> bucket = new ArrayList<>();
        getS(0,0,bucket,N,M);
        String[] tmp = set.toArray(new String[0]);
        Arrays.sort(tmp, (a, b) -> {
            String[] aSplit = a.split(" ");
            String[] bSplit = b.split(" ");
            int len = Math.min(aSplit.length, bSplit.length);
            for (int i = 0; i < len; i++) {
                int aNum = Integer.parseInt(aSplit[i]);
                int bNum = Integer.parseInt(bSplit[i]);
                if (aNum != bNum) return Integer.compare(aNum, bNum);
            }
            return Integer.compare(aSplit.length, bSplit.length); // 길이 다르면 짧은 게 먼저
        });

        for(String t : tmp){
            System.out.println(t);
        }
    }
    static void getS(int start, int count, List<String> bucket, int N, int M){
        if(count==M){
            bucket.sort(Comparator.comparingInt(Integer::parseInt));
            set.add(String.join(" ",bucket));
        }
        else{
            for(int i= start; i<N;i++){
                bucket.add(arr[i]);
                getS(i,count+1,bucket,N,M);
                bucket.remove(arr[i]);
            }
        }
    }
}
