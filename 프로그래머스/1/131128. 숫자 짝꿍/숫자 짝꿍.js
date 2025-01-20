
function solution(X, Y) {

    var xtmp = X.split('');
    var ytmp = Y.split('');
    var xCounter = new Array(10).fill(0);
    var yCounter = new Array(10).fill(0);
    xtmp.map((num)=>xCounter[num]++);
    ytmp.map((num)=>yCounter[num]++);
    var cCounter = new Array(10).fill(0);
    for(let i=0; i<=9; i++) {
        cCounter[i]=Math.min(xCounter[i],yCounter[i]);
    }
    var answer = '';
    for(let i=9; i>=0; i--){
        answer+=i.toString().repeat(cCounter[i]);
    }
    if(answer==''){
        return "-1"
    }
    else if(answer==0){
        return "0";
    }
    return answer;
}