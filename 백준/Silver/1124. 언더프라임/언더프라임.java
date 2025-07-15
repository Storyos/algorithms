import java.util.*;
import java.io.*;

public class Main {
    static Set<Integer> primeSet = new HashSet<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int answer = 0;
        String[] line = br.readLine().split(" ");
        int a = Integer.parseInt(line[0]);
        int b = Integer.parseInt(line[1]);
        // 즉 소인수 분해 했을때 나오는 소수의 개수가 소수이면 언더프라임
        getPrime();
        Integer[] list = primeSet.toArray(new Integer[0]);
        Arrays.sort(list);
        for(int i=a; i<=b; i++) {
            //소인수 분해
            if(primeSet.contains(primeDivide(i,list))) answer++;

        }
        System.out.println(answer);
    }
    static int primeDivide(int num, Integer[] list){
        List<Integer> tmp = new ArrayList<>();
        for(int i=0; i<list.length; i++){
            while(num%list[i]==0){
                num/=list[i];
                tmp.add(list[i]);
            }
        }
        return tmp.size();
    }
    static void getPrime(){
        boolean[] lists = new boolean[100001];
        Arrays.fill(lists,true);
        lists[0]=false;
        lists[1]=false;
        for(int i=2; i<=Math.sqrt(lists.length); i++){
            if(lists[i]){
                for(int j=i*2; j<lists.length; j+=i){
                    lists[j]=false;
                }
            }
        }
        for(int i=0; i< lists.length; i++){
            if(lists[i]) primeSet.add(i);
        }
    }
}