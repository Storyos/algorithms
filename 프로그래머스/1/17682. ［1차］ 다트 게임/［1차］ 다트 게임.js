function init(dartResult){
    var results = dartResult.split(/[0-9]/);
    var resultc = dartResult.split(/[^0-9]/);
    var score =[];
    var bonus =[];
    for(var num of resultc){
        if(parseInt(num)>=0){
            score.push(parseInt(num));
        }
    }
    for(var s of results){
        if(s!=''){
            bonus.push(s);
        }
    }
    return [score,bonus];
}
function solution(dartResult) {
    var [score,bonus] = init(dartResult);
    var answer = 0;

    var lastScore = 0;
    for(let i=0; i<score.length; i++) {
        var cur_score = score[i];
        if(bonus[i][0]=='D'){
            cur_score=Math.pow(score[i],2);
        }
        else if(bonus[i][0]=='T'){
            cur_score=Math.pow(score[i],3);    
        }
        if(bonus[i].length>=2){
            if(bonus[i][1]=='#'){
                cur_score*=-1;
            }else if(bonus[i][1]=='*'){
                cur_score*=2;
                lastScore*=2;
            }
        }
        answer+=lastScore;
        lastScore=cur_score;
    }
    return answer+lastScore;
}