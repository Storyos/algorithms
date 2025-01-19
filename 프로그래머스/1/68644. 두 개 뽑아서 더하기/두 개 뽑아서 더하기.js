function solution(numbers) {
    numbers.sort((a,b)=>a-b);
    var a = new Set();
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++){
            a.add(numbers[i]+numbers[j]);
        }
    }
    
    return [...a.values()].sort((a,b)=>a-b);
}