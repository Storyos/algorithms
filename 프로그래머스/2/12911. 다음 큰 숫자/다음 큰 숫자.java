import java.util.*;
class Solution {
    public int solution(int n) {
        int smallest = n & -n;
        int ripple = n+ smallest;
        int ones = n^ ripple;
        ones = (ones >>> 2) / smallest;
        
        return ripple | ones;
        
    }
}