function solution(word) {
    //맨앞자리부터 *5+1 
    let base ="AEIOU"
    let answer = word.length;
    let count = 1;
    for(let i=4; i>=0; i--){
        if(word[i]&&word[i]!="A"){
            let diff = base.indexOf(word[i]);
            answer+=diff*count;
        }
        count=count*5+1;
    }
    return answer;
}