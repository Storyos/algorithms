import java.util.*;
import java.io.*;

public class Main {
    static String maxNum = "0";
    static String minNum = "9999999999";
    static String[] line;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        line = br.readLine().split(" ");
        boolean[] visited = new boolean[10];

        Stack<String> stack = new Stack<>();
        for(int i=0; i<10; i++) {
            stack.push(String.valueOf(i));
            visited[i]=true;
            dfs(stack, visited, N, 1, i);
            stack.pop();
            visited[i]=false;
        }
        System.out.println(maxNum);
        System.out.println(minNum);
    }
    static void dfs(Stack<String> arr,boolean[] visited,int N,int count, int lastNum){
        if(count==N+1){
            String[] tmp = arr.toArray(new String[0]);

            String data = String.join("",tmp);
            if(Long.parseLong(data)>Long.parseLong(maxNum)){
                maxNum=data;
            }
            if(Long.parseLong(data)<Long.parseLong(minNum)){
                minNum=data;
            }
        }
        else{
         for(int i=0; i<10; i++){
             if(!visited[i]){
                 if((line[count-1].equals("<")&&lastNum<i)||
                    (line[count-1].equals(">")&&lastNum>i)
                 ){
                     visited[i]=true;
                     arr.push(String.valueOf(i));
                     dfs(arr,visited,N,count+1,i);
                     arr.pop();
                     visited[i]=false;
                 }
             }
         }
        }
    }
}