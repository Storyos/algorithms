function solution(board, skill) {
    const N = board.length;
    const M = board[0].length;
    var answer = 0;
    let acc = Array.from(Array(N+1),()=>new Array(M+1).fill(0));
    for(let [type,r1,c1,r2,c2, degree] of skill){
        degree=type===1?degree*-1:degree;
        acc[r1][c1] += degree;
        acc[r1][c2+1] -= degree;
        acc[r2+1][c1] -= degree;
        acc[r2+1][c2+1] += degree;
    }
    
    
    for (let i = 0; i < N+1; i++) {
       for (let j = 1; j < M+1; j++) {
        acc[i][j] += acc[i][j-1];
        }
    }
    
    
    for (let j = 0; j < M+1; j++) {
        for (let i = 1; i < N+1; i++) {
            acc[i][j] += acc[i-1][j];
        }
    }
    
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
        if (board[i][j] + acc[i][j] > 0) answer++;
        }
    }   


    
    return answer;
}