function solution(s) {
    let maxLen = 1;
    function expand (left,right) {
        while(left>=0 && right<s.length && s[left]===s[right]){
            maxLen = Math.max(maxLen, right-left+1);
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // 홀수 길이 팰린드롬
        expand(i, i + 1); // 짝수 길이 팰린드롬
    }

    return maxLen;
}
