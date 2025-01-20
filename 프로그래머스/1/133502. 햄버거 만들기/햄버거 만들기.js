function solution(ingredient) {
    let stack = [];
    let answer = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        if (stack.length >= 4) {
            let length = stack.length;
            if (
                stack[length - 4] === 1 &&
                stack[length - 3] === 2 &&
                stack[length - 2] === 3 &&
                stack[length - 1] === 1
            ) {
     
                stack.splice(-4);
                answer++; 
            }
        }
    }

    return answer;
}
