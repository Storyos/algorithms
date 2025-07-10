import java.util.*;
import java.io.*;

class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int a = 0;
        String[] tmp = s.split("");
        for(String str : tmp){
            a = str.equals("(")?a+1:a-1;
            if(a<0) return false;
        }
        
        return a==0;
    }
}