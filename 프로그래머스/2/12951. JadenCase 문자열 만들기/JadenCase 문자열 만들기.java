class Solution {
    public String solution(String s) {
        String answer = "";
        String[] str = s.split(" ",-1);
        for(int i=0; i<str.length; i++){
            String[] tmp = str[i].split("");
            tmp[0]=tmp[0].toUpperCase();
            
            for(int j=1; j<tmp.length; j++){
                tmp[j]=tmp[j].toLowerCase();
            }
            
            str[i]=String.join("",tmp);
        }
        answer = String.join(" ",str);
        return answer;
    }
}