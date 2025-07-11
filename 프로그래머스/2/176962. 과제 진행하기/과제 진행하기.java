import java.util.*;
import java.io.*;
class Lecture{
    String name;
    int remainTime;
    Lecture(String name, String remainTime){
        this.name = name;
        this.remainTime = Integer.parseInt(remainTime);
    }
    Lecture(String name, int remainTime){
        this.name = name;
        this.remainTime = remainTime;
    }
    
}
class Solution {
    public String[] solution(String[][] plans) {
        Arrays.sort(plans,(a,b)->timeSort(a,b));
        
        
        Stack<Lecture> paused = new Stack<>();
        String time = plans[0][1];
        Lecture first = new Lecture(plans[0][0],plans[0][2]);
        paused.push(first);
        List<String> result = new ArrayList<>();
        //제일 처음에 시작 -> 다음꺼왔을때 calTime해서 다했으면 없애고 아니면 다시 넣기
        for(int i=1; i<plans.length; i++){
            //고려 못했던것 : 빈 시간동안 여러개 할 수있음
            String[] plan = plans[i];
            int passedTime = calTime(plan[1],time);
            
            Lecture p = paused.pop();
            while(passedTime>=p.remainTime){
                result.add(p.name);
                if(paused.isEmpty()) break;
                passedTime-=p.remainTime;
                p = paused.pop();
            }
            //이거는 다 못한 거
            if(p.remainTime>passedTime)
            paused.push(new Lecture(p.name,p.remainTime-passedTime));
            paused.push(new Lecture(plan[0],plan[2]));
            time = plan[1];
        }
        while(!paused.isEmpty()){
            result.add(paused.pop().name);
        }
        
        return result.toArray(new String[0]);
    }
    private int calTime(String lstTime, String curTime){
            String[] aTime = lstTime.split(":");
            String[] bTime = curTime.split(":");
            int aH = Integer.parseInt(aTime[0]);
            int bH = Integer.parseInt(bTime[0]);
            int aM = Integer.parseInt(aTime[1]);
            int bM = Integer.parseInt(bTime[1]);
            return (aH*60+aM)-(bH*60+bM);
    }
    
    private int timeSort(String[] a, String[] b){
            String[] aTime = a[1].split(":");
            String[] bTime = b[1].split(":");
            int aH = Integer.parseInt(aTime[0]);
            int bH = Integer.parseInt(bTime[0]);
            if(aH!=bH) return aH-bH;
            int aM = Integer.parseInt(aTime[1]);
            int bM = Integer.parseInt(bTime[1]);
            return aM-bM;
    }
}