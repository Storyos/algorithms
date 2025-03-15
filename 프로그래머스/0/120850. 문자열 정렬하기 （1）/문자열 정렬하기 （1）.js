function solution(my_string) {
    return my_string.split('').map(Number).filter((a,b)=>a>=0&&a<=9).sort((a,b)=>a-b);
}