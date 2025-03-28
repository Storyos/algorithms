function solution(gems) {
    const gemTypes = new Set(gems).size;
    const gemMap = new Map();
    let answer = [0, gems.length - 1];
    let minLen = gems.length;
    
    let start = 0;
    for (let end = 0; end < gems.length; end++) {
        gemMap.set(gems[end], (gemMap.get(gems[end]) || 0) + 1);
        
        while (gemMap.size === gemTypes) {
            if (end - start < minLen) {
                minLen = end - start;
                answer = [start + 1, end + 1]; // 인덱스는 1부터 시작
            }
            gemMap.set(gems[start], gemMap.get(gems[start]) - 1);
            if (gemMap.get(gems[start]) === 0) gemMap.delete(gems[start]);
            start++;
        }
    }
    return answer;
}
