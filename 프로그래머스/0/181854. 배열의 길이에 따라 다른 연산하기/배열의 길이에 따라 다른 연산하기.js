function solution(arr, n) {
    return arr.map((a,index)=>
        arr.length%2==0?a+n*(index%2):a+n*((index+1)%2));
}