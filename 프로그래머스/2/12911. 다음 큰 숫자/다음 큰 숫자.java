class Solution {
    public int solution(int n) {
        int bn = Integer.bitCount(n);
        int next = n;
        
        while(true)
        {
         next++;
        if(bn==Integer.bitCount(next)) return next;
        }
        
    }
}