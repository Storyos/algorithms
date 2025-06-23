import java.util.*;
class Solution {
    public String solution(String s) {
        String answer = "";
        IntSummaryStatistics  stats = Arrays.stream(s.split(" "))
                                        .mapToInt(Integer::parseInt)
                                        .summaryStatistics();
        
        return new String(stats.getMin()+" "+stats.getMax());
    }
}