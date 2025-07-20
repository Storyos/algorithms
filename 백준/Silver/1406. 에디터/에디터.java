import java.util.*;
import java.io.*;

public class Main {
    static Stack<String> leftStack = new Stack<>();
    static Stack<String> rightStack = new Stack<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] data = br.readLine().split("");

        leftStack.addAll(Arrays.asList(data));

        int M = Integer.parseInt(br.readLine());
        String[][] cmds = new String[M][];
        for(int i=0; i<M; i++){
            cmds[i]=br.readLine().split(" ");
        }
        for(int i=0; i<M; i++){
            editFun(cmds[i]);
        }
        printStack();

    }
    static void editFun(String[] cmd){
        if(cmd[0].equals("L")){
            if(!leftStack.isEmpty())
                rightStack.push(leftStack.pop());
            return;
        }
        if(cmd[0].equals("D")){
            if(!rightStack.isEmpty()){
                leftStack.push(rightStack.pop());
                return;
            }
        }
        if(cmd[0].equals("B")) {
            if(!leftStack.isEmpty()) {
                leftStack.pop();
                return;
            }
        }
        if(cmd[0].equals("P")){
            leftStack.push(cmd[1]);
        }
    }
    static void printStack(){
        StringBuilder sb = new StringBuilder();
        while(!leftStack.isEmpty()){
            sb.append(leftStack.pop());
        }
        sb.reverse();
        while(!rightStack.isEmpty()){
            sb.append(rightStack.pop());
        }
        System.out.println(sb);
    }
}