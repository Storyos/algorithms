function solution(n) {
    let f = 1;
    let index = 1;
    while(f<=n){
        f*=index;
        index++;
    }
    
    return index-2;
}