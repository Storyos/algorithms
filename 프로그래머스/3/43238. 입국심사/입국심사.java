import java.util.*;

class Solution {
    static int[] times;
    static long N;

    public long solution(int n, int[] timesArr) {
        times = timesArr;
        Arrays.sort(times);
        N = n;

        long start = 0;
        long end   = (long)times[times.length - 1] * N;

        // answer 변수 없이도, 루프 종료 후 start가 정답입니다.
        while (start <= end) {
            long mid = (start + end) / 2;
            if (isAvailable(mid)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return start;
    }

    static boolean isAvailable(long time) {
        long count = 0;                   // ← int → long
        for (int t : times) {
            count += time / t;            // 합이 매우 커질 수 있으므로 long
            if (count >= N) return true; 
        }
        return false;
    }
}
