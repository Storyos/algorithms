function solution(answers) {
    var pattern = ['12345','21232425','3311224455'];
    var tmp =[];
    var sheet = [];
    for(let i=0; i<pattern.length; i++){
        tmp.push(pattern[i].repeat(Math.ceil(answers.length/pattern[i].length)));
        sheet.push(tmp[i].split(""));
    }
    var cnt = [0,0,0];
    for(let i=0; i<answers.length; i++){
        if(answers[i]==sheet[0][i]) cnt[0]++;
        if(answers[i]==sheet[1][i]) cnt[1]++;
        if(answers[i]==sheet[2][i]) cnt[2]++;
    }
    var answer = [];
    for(let i=0; i<3; i++) {
        if(Math.max(...cnt)==cnt[i]){
            answer.push(i+1);
        }
    }
    return answer;
}