import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int T = Integer.parseInt(br.readLine());

        for(int i=0; i<T; i++){
            String str1 = br.readLine();
            String str2 = br.readLine();
            int size = str2.length();
            Map<Character,Integer> charMap = getAlpMap(str2);
            bw.write(sliding(charMap,str1,size));
        }
        bw.flush();
    }

    static String sliding(Map<Character,Integer> m, String str, int size){
        //초기상태로 넣은거를 체크
        boolean valid = true;
        for(int i=0; i<size; i++){
            Character c = str.charAt(i);
            if(m.containsKey(c)){
                m.put(c,m.get(c)-1);
            }
        }
        if(checkMap(m)) return "YES\n";

        for(int i=size; i<str.length(); i++){
            Character minusC = str.charAt(i-size);
            Character plusC = str.charAt(i);
            if(m.containsKey(minusC)){
                m.put(minusC,m.get(minusC)+1);
            }
            if(m.containsKey(plusC)){
                m.put(plusC,m.get(plusC)-1);
            }
            if(checkMap(m)) return "YES\n";
        }
        //빼고 넣은거 두개만 체크
        return "NO\n";

    }
    static boolean checkMap(Map<Character,Integer> map){
        boolean valid = true;
        for(Integer a : map.values()){
            if(a!=0){
                valid=false;
                break;
            }
        }
        return valid;
    }
    static Map<Character,Integer> getAlpMap(String str){
        Map<Character,Integer> alpMap = new HashMap<>();
        for(int j=0; j<str.length(); j++){
            alpMap.put(str.charAt(j),alpMap.getOrDefault(str.charAt(j),0)+1);
        }
        return alpMap;
    }
}