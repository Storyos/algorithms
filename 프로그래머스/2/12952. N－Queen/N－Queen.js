// n : 체스판 크기
function solution(n) {
    var answer = 0;
    let board = new Array(n).fill(-1);
    bTracking(0,board);
    
    function bTracking(col,board){
        const tmpBoard = [...board];
        if(col===n) answer++;
        for(let i=0; i<n; i++){
            if(validate(tmpBoard,col,i)){
                tmpBoard[col]=i;
                bTracking(col+1,[...tmpBoard]);
            }
        }
    }
    return answer;
    function validate(board,col,row){
        for(let i=0; i<col; i++){
            if(board[i]===row) return false;
            if(Math.abs(col-i)===Math.abs(row-board[i])) return false;
        } return true;
    }
}