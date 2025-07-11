class Solution {
    public long solution(int w, int h) {
        long answer = (long)w*h;
        //w가 무조건 더 큰걸로 정하자
        if(h>w) {
            int tmp = h;
            h=w;
            w=tmp;
        }
        int gcd = getGCD(w,h);
        int wRatio = w/gcd;
        int hRatio = h/gcd;
        
        //정사각형인 경우
        if(wRatio==hRatio) return answer-gcd;
        
        long tmp  =1;
        double a  = (double)hRatio/wRatio;
        double last = 0.0;
        for(int i=1; i<wRatio; i++){
            tmp = (int)(a*i)!=(int)last?tmp+2:tmp+1;
            last = (a*i);
        }
    
        return answer-(long)(tmp*gcd);
    }
    
    
    int getGCD(int a, int b){
        if (b == 0) return a;
        return getGCD(b, a % b);
    }
}