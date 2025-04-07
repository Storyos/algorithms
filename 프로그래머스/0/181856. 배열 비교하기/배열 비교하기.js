function solution(arr1, arr2) {
    var answer = 0;
    
    if(arr1.length>arr2.length) return 1;
    if(arr1.length<arr2.length) return -1;
    
    if(arr1.reduce((acc,num)=>acc+=num,0)>arr2.reduce((acc,num)=>acc+=num,0)) return 1;
    if(arr1.reduce((acc,num)=>acc+=num,0)<arr2.reduce((acc,num)=>acc+=num,0)) return -1;

    return 0;
}