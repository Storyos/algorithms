function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a.charAt(n) === b.charAt(n)) {
            return a.localeCompare(b);
        }
        return a.charCodeAt(n) - b.charCodeAt(n);
    });
}
