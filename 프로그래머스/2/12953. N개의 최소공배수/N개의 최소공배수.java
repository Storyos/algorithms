class Solution {
    public int solution(int[] arr) {
        int gcd = getGCD(arr[0],arr[1]);
        int answer = arr[0]*arr[1]/gcd;
    
        if(arr.length==1) return arr[0];
        if(arr.length==2) return answer;
        
        for(int i=2; i<arr.length; i++){
                gcd = getGCD(answer,arr[i]);
                answer *=arr[i]/gcd;
        }
        return answer;
    }
    
    
    
    static int getGCD(int a, int b){
        //최대 공약수 구하는 방법
        int tmp,n;
        if(a<b){
            tmp = b;
            b=a;
            a=tmp;
        }
        while(b!=0){
            n=a%b;
            a=b;
            b=n;
        }
        return a;
    }
}