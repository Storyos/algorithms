function initMap(){
    var tmp = new Map();
    var tmp2 = new Map();
    var word = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    for(let i=0; i<word.length; i++) {
        tmp.set(i,word[i]);
        tmp2.set(word[i],i);
    }
    return [tmp,tmp2];
}


function solution(s) {
    var answer = '';
    var [digitToString,stringToDigit]= initMap();
    var cmd = "";
    
    for(let i=0; i<s.length; i++){
        if(s[i]>=0&&s[i]<=9){
            answer+=s[i];
        }else{
            cmd+=s[i];
        }
        if(stringToDigit.has(cmd)){
            answer+=stringToDigit.get(cmd);
            cmd="";
        }
    }
    return parseInt(answer);
}