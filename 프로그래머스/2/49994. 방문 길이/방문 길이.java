import java.util.*;
class Solution {

    public int solution(String dirs) {
        int answer = 0;
        String[] cmd = dirs.split("");
        answer = runCmd(cmd);
        return answer;
    }
    static int runCmd(String[] cmd){
        Set<String> set = new HashSet<>();
        int x = 5; int y = 5;
        for(String c : cmd){
            System.out.println(c);
            int dir;
            int dx = x;
            int dy = y;
            if(c.equals("L")) dx -= 1;
            else if(c.equals("R"))dx += 1;
            else if(c.equals("U"))dy -= 1;
            else if(c.equals("D"))dy += 1;
            // 무시
            if(dx<0 || dy<0 || dx>10 || dy>10) {
                dx = x;
                dy = y;
            }
            if(dx!=x || dy!=y){
                set.add(x+","+y+"-"+dx+","+dy);
                set.add(dx+","+dy+"-"+x+","+y);
                x= dx; y=dy;
            }
        }
        return set.size()/2;
    }
}