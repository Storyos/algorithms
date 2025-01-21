var stack = [];
var globalBoard=[];
var result=0;
function pick(line){
        for(let j=0; j<globalBoard.length; j++){
            if(globalBoard[j][line]!=0){
                var pickedNum = globalBoard[j][line];
                globalBoard[j][line]=0;
                return pickedNum;
            }
        }
}
function checkStack(){
    if((stack[stack.length-1]>=1)&&(stack[stack.length-1]==stack[stack.length-2])){
        stack.pop();
        stack.pop();
        result+=2;
    }
}
function solution(board, moves) {
    var answer = 0;
    globalBoard=board;
    for(let i=0; i<moves.length; i++){
        var picked= pick(moves[i]-1);
        if(picked>=1) stack.push(picked);
        checkStack();
    }
    return result;
}