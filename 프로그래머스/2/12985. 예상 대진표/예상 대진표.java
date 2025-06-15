class Solution
{
    public int solution(int n, int a, int b)
    {
        int count =0;
        int tmp = n;
        while(tmp>1){
            tmp/=2;
            count++;
        }
        n/=2;
        int section = 0;
        int size = n;
        while(true){
            if((a-n-0.5)*(b-n-0.5)<0)  break;
            else {
                section++;
                size/=2;
                n = a-n-0.5>0?n+size:n-size;
            }
        }
        return count-section;
    }
}