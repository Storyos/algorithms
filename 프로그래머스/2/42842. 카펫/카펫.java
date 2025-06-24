class Solution {
    public int[] solution(int brown, int yellow) {
        
        int[] answer = new int[2];
        // xy = brown + yellow
        // 2x+2y = brown + 4
        for(int x = 1; x<=brown+yellow; x++){
            int valid = (brown+yellow)%x;
            if(valid==0&&((brown+yellow)/x+x)*2==brown+4){
               answer[1]=x;
               answer[0]=(brown+yellow)/x;
                break;
            }
        }
        
        return answer;
    }
}