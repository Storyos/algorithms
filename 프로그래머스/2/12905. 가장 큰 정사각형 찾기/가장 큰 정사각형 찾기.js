function solution(board)
{
    var answer = 0;
    if(board[0].length===1||board.length===1){
        for(var a of board){
            for(var b of a){
                if(b===1) return 1;
            }
        }
        return 0;
    }
    var max = 0;
    for(var i=0; i<board.length; i++){
        for(var j=0; j<board[i].length; j++){
            if(board[i][j]===1){
                if(i===0||j===0){
                    board[i][j]=1;
                }
                else board[i][j]=Math.min(board[i-1][j],board[i-1][j-1],board[i][j-1])+1; 
                max = Math.max(board[i][j],max);
            }
        }
    }
    return max*max;
}