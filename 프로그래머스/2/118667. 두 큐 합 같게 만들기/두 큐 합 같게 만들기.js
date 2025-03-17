function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    const len = queue.length;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const target = (sum1 + sum2) / 2;

    if ((sum1 + sum2) % 2 !== 0) return -1; 
    let p1 = 0; 
    let p2 = queue1.length; 
    let count = 0;
    
    const limit = len * 2; 
    while (count <= limit) {
        if (sum1 === target) {
            return count;
        }
        if (sum1 > target) {
            sum1 -= queue[p1 % len];
            p1++;
        } else {
            sum1 += queue[p2 % len];
            p2++;
        }
        count++;
    }
    
    return -1;
}
