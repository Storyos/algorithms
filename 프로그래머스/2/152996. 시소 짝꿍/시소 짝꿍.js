function solution(weights) {
    let answer = 0;
    const map = new Map();
    const ratios = [1, 2/3, 1/2, 3/4];
    weights.sort((a,b)=>a-b)
    for (let weight of weights) {
        for (let ratio of ratios) {
            const key = weight * ratio;
            if (map.has(key)) {
                answer += map.get(key);
            }
        }

        // 현재 weight도 추가
        map.set(weight, (map.get(weight) || 0) + 1);
    }

    return answer;
}
