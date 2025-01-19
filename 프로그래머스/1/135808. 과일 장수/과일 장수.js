function solution(k, m, score) {
    score.sort((a, b) => b - a); // 내림차순 정렬
    let answer = 0;

    // 한 상자에 m개씩 묶어 계산
    for (let i = 0; i + m <= score.length; i += m) {
        answer += score[i + m - 1] * m; // m번째 사과 점수를 가져옴
    }

    return answer;
}