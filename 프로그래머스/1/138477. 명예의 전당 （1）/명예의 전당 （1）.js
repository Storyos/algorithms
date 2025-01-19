function solution(k, score) {
    var answer = [];
    // 명예의 전당 자리 개수 : k
    // 내놔야하는 값 : 명예의 전당 최하점
    var min_score = 2000;
    var legend = [];
    for(let i=0; i<score.length; i++){
        if(legend.length<k){
            legend.push(score[i]);
        }
        else{
            if(legend[legend.length-1]<score[i]){
                legend.pop();
                legend.push(score[i]);
            }
        }
        legend.sort((a,b)=>b-a);
        answer.push(legend[legend.length-1]);
    }
    return answer;
}