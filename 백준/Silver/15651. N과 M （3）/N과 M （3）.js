const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;

rl.on('line', (input) => {
    [n, m] = input.split(" ").map(Number);
}).on('close', () => {
    let arr = [];
    let output = []; // 출력 성능 최적화를 위해 배열 사용

    function permutation(count) {
        if (count === m) {
            output.push(arr.join(' ')); // 배열을 문자열로 변환하여 저장
            return;
        }

        for (let i = 1; i <= n; i++) {
            arr.push(i);
            permutation(count + 1);
            arr.pop();
        }
    }

    permutation(0);
    console.log(output.join('\n')); // 한 번만 출력하여 성능 최적화
});
