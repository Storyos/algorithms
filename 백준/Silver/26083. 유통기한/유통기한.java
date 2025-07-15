import java.io.*;
import java.util.HashMap;
import java.util.Map;

public class Main {
    static int[] curDate = new int[3];
    static BufferedWriter bw;
    static Map<Integer,Integer> calMap = new HashMap<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] exp = br.readLine().split(" ");
        int N = Integer.parseInt(br.readLine());
        String[][] lines = new String[N][];

        int[] tmp1 = {1,3,5,7,8,10,12};
        int[] tmp2 = {4,6,9,11};
        calMap.put(2,28);
        for(int a : tmp1) calMap.put(a,31);
        for(int a : tmp2) calMap.put(a,30);

        for(int i=0; i<N; i++){
            lines[i]=br.readLine().split(" ");
        }
        for(int i=0; i<curDate.length; i++){
            curDate[i]=Integer.parseInt(exp[i]);
        }

        for(String[] line : lines){
            checkPossible(line);
        }
        bw.flush();
    }

    static void checkPossible(String[] line) throws IOException {
        int[] date = new int[3];
        for(int i=0; i<3; i++) date[i]=Integer.parseInt(line[i]);
        boolean a = true;

        if(checkFirst(date[0],date[1],date[2])||
                checkFirst(date[2],date[0],date[1])||
                checkFirst(date[2],date[1],date[0])){
            if(checkFirst(date[0],date[1],date[2])){
                a = a&&compareDate(date[0],date[1],date[2]);
            }
            if(checkFirst(date[2],date[1],date[0])){
                a = a&&compareDate(date[2],date[1],date[0]);
            }
            if(checkFirst(date[2],date[0],date[1])) {
                a = a && compareDate(date[2], date[0], date[1]);
            }
            if(a) bw.write("safe\n");
            else bw.write("unsafe\n");
        }else{
            bw.write("invalid\n");
        }

    }
    static boolean compareDate(int year,int month, int day){
        int cur = curDate[0] * 10000 + curDate[1] * 100 + curDate[2];
        int exp = year * 10000 + month * 100 + day;

        return exp>=cur;
    }
    static boolean checkFirst(int year, int month, int day){
        if (month < 1 || month > 12 || day < 1) return false;

        boolean isLeap = (year % 4 == 0);
        if (month == 2) {
            return day <= (isLeap ? 29 : 28);
        }
        return calMap.containsKey(month) && day <= calMap.get(month);
    }

}