function solution(m, n, board) {
    let check = [];
    let rotatedBoard = Array.from(Array(n), () => new Array(m).fill(0));

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            rotatedBoard[j][m - i - 1] = board[i][j]; // 회전 후 역순 배치 (아래쪽이 바닥)
        }
    }

    getBlock();

    while(check.length > 0){
        for(var [y, x] of check){
            rotatedBoard[y][x] = '0';
            rotatedBoard[y+1][x] = '0';
            rotatedBoard[y][x+1] = '0';
            rotatedBoard[y+1][x+1] = '0';
        }

        for(let i=0; i<n; i++){
            rotatedBoard[i] = rotatedBoard[i].filter(v => v !== '0');
            while(rotatedBoard[i].length < m){ 
                rotatedBoard[i].push('0');
            }
        }

        check = [];
        getBlock();
    }

    let answer = 0;
    for(let row of rotatedBoard){
        answer += row.filter(v => v === '0').length;
    }

    return answer;

    function getBlock(){
        for(let i=0; i<rotatedBoard.length-1; i++){
            for(let j=0; j<rotatedBoard[i].length-1; j++){
                if(rotatedBoard[i][j] !== '0' && rotatedBoard[i][j] === rotatedBoard[i+1][j] &&
                   rotatedBoard[i][j] === rotatedBoard[i][j+1] &&
                   rotatedBoard[i][j] === rotatedBoard[i+1][j+1]){
                    check.push([i,j]);
                }
            } 
        }
    }
}
