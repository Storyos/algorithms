class Solution
{
    static int answer;
    public int solution(String s)
    {
        answer = 0;
        String[] str = s.split("");
        for(int i=0; i<str.length; i++){
            //i가 기준점
            answer = Math.max(answer,pend(str,i,i));
            answer = Math.max(answer,pend(str,i,i+1));
        }

        return answer;
    }
    static int pend(String[] str,int start, int end){
        int len = 0;
        while(start>=0&&end<str.length&&str[start].equals(str[end])){
            len = Math.max(len, end-start+1);
            start--;
            end++;
        }
        return len;
    }
}