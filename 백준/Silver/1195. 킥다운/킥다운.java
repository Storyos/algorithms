import java.util.*;
import java.io.*;

public class Main {
    static int n,m,maxLen;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] firstLine = br.readLine().split("");
        String[] secondLine = br.readLine().split("");
        String[] tmp;
        if(secondLine.length>firstLine.length){
            tmp = firstLine;
            firstLine = secondLine;
            secondLine = tmp;
        }
        int n = firstLine.length;
        int m = secondLine.length;
        int minLen = Math.min(n,m);
        int maxLen = Math.max(n,m);
        int[] arr1 = new int[n+m];
        int[] arr2 = new int[n+m];
        for(int i=0; i<n; i++) arr1[i]= Integer.parseInt(firstLine[i])-1;
        for(int i=0; i<m; i++) arr2[i] = Integer.parseInt(secondLine[i])-1;
        int answer = 200;
        for(int i=-m; i<=m+n; i++){
           boolean success = true;
            for(int j=0; j<n; j++){
                if(i+j<0) continue;
                if(i+j>=arr1.length||i+j>=arr2.length) continue;
                if(arr1[i+j]*arr2[j]!=0){
                    success= false;
                    break;
                }
            }
            if(success){
                if(i<0) {
//                    System.out.println("Case 1 : "+i);
                    answer = Math.min(answer, (maxLen - i));
                }
                else if(i+minLen<=maxLen) {
//                    System.out.println("Case 2 : "+i);
                    answer = maxLen;
                }
                else {
//                    System.out.println("Case 3 : "+i);
                    answer = Math.min(answer, i + minLen);
                }
//                System.out.println("answer = " + answer);
//                System.out.println();
            }
        }
        System.out.println(answer);
    }

}