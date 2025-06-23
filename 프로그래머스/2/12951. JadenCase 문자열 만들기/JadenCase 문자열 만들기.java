import java.util.*;

class Solution {
    public String solution(String s) {
        // limit=-1 로 하면 연속된 공백(빈 문자열)도 배열에 남습니다.
        String[] words = s.split(" ", -1);

        for (int i = 0; i < words.length; i++) {
            String w = words[i];
            if (w.length() > 0) {
                String lower = w.toLowerCase();
                words[i] = lower.substring(0, 1).toUpperCase()
                         + lower.substring(1);
            }
        }
        return String.join(" ", words);
    }
}
