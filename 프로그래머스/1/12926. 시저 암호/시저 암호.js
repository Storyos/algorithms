function solution(s, n) {
    var tmp = [];
    for(let i=0; i<s.length; i++){
        tmp.push(s.charCodeAt(i));
    }
    
    for(let i=0; i<tmp.length; i++) {
        if(tmp[i]==32){
            continue;
        }else{
            if(tmp[i]<=90 && tmp[i]+n>90){
                tmp[i]= tmp[i]+n-26;
            }
            else if(tmp[i]<=122 && tmp[i]+n>122){
                tmp[i]=tmp[i]+n-26;
            }
            else{
                tmp[i]+=n;
            }
        }
    }
    var answer = '';
    for(let i=0; i<tmp.length; i++) {
        answer+=String.fromCharCode(tmp[i]);   
    }
    return answer;
}