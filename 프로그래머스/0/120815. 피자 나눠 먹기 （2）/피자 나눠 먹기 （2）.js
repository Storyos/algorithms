function solution(n) {
//     피자 한판 6조각
    var answer = 1;
    let total = 6;
    while(total%n!=0){
        answer++;
        total = answer*6;
    }
    return answer;
}