class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int xy = brown+yellow;
        for(int i=3; i<=xy/i; i++){
            int sero = xy/i;
            int garo = i;
            if(xy%i==0&&sero>=3 && garo>=3 && (sero-2)*(garo-2)==yellow){
                answer[0]=sero;
                answer[1]=garo;
                break;
            }
        }
        
        return answer;
    }
}