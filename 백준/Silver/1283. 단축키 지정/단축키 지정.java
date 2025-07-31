import java.util.*;
import java.io.*;

public class Main {
    static Set<Character> keySet = new HashSet<>();
    static String[] answer;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        String[] cmds = new String[N];
        answer = new String[N];
        for(int i=0; i<N; i++){
            cmds[i]=br.readLine();
        }
        for(int i=0; i<N; i++){
            if(!mapping(i,cmds[i])){
                for(int j=0; j<cmds[i].length(); j++) {
                    Character target = cmds[i].toUpperCase().charAt(j);
                    if(target!=' '&&!keySet.contains(target)){
                        keySet.add(target);
                        StringBuilder sb = new StringBuilder();
                        sb.append(cmds[i], 0, j)
                                .append("[")
                                .append(cmds[i].charAt(j))
                                .append("]")
                                .append(cmds[i].substring(j+1));
                        answer[i]=sb.toString();
                        break;
                    }

                }

            }
        }
        for(String s : answer){
            System.out.println(s);
        }
    }
    static boolean mapping(int idx,String cmd){
        boolean valid = false;
        String[] words = cmd.split(" ");
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<words.length; i++){
            String upperC = words[i].toUpperCase();
            if(!valid&&!keySet.contains(upperC.charAt(0))){
                valid = true;
                keySet.add(upperC.charAt(0));
                sb
                        .append("[")
                        .append(words[i].charAt(0))
                        .append("]")
                        .append(words[i].substring(1));
            }else{
                sb.append(words[i]);
            }
            sb.append(" ");
        }
        answer[idx]=sb.toString();
        return valid;
    }
}