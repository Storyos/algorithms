function solution(scores) {
    const wanho = scores[0];
    const wanhoSum = wanho[0] + wanho[1];

    // 1. 근무 태도 점수 내림차순, 동료 평가 점수 오름차순 정렬
    scores.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return b[0] - a[0];
    });

    let maxBoss = 0;
    let rank = 1;

    for (const [peer, boss] of scores) {
        // 2. 인센티브 제외 대상 확인
        if (boss < maxBoss) {
            // 3. 완호가 인센티브 제외 대상인지 확인
            if (peer === wanho[0] && boss === wanho[1]) return -1;
            continue;
        }
        maxBoss = Math.max(maxBoss, boss);
        if (peer + boss > wanhoSum) rank++;
    }

    return rank;
}
