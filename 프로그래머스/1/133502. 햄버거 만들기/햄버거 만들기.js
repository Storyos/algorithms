function solution(ingredient) {
    let stack = [];
    let answer = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        // 스택의 마지막 4개의 요소가 "1231"인지 확인
        if (stack.length >= 4) {
            let length = stack.length;
            if (
                stack[length - 4] === 1 &&
                stack[length - 3] === 2 &&
                stack[length - 2] === 3 &&
                stack[length - 1] === 1
            ) {
                // "1231" 패턴 제거
                stack.splice(-4);
                answer++; // 햄버거 카운트 증가
            }
        }
    }

    return answer;
}
