import java.util.*;
import java.io.*;

public class Main {
    static int answer = 0;
    static Map<Character,Integer> charMap  =new HashMap<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String data = br.readLine();
        for(int i=0; i<data.length(); i++){
            charMap.put(data.charAt(i), charMap.getOrDefault(data.charAt(i),0)+1);
        }
        for(Character c : charMap.keySet()){
            charMap.put(c, charMap.get(c)-1);
            dfs(c,1,data.length());
            charMap.put(c, charMap.get(c)+1);
        }
        System.out.println(answer);
    }
    static void dfs(Character lstIdx, int count,int len){
        if(count==len){
            answer++;
        }else{
            for(Character c : charMap.keySet()){
             if(lstIdx!=c&&charMap.get(c)>0){
                 charMap.put(c, charMap.get(c)-1);
                 dfs(c,count+1,len);
                 charMap.put(c, charMap.get(c)+1);
             }
            }
        }
    }
}