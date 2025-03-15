function solution(numbers, direction) {
    if(direction==="right"){
        return [numbers.pop(),...numbers];
    }else{
        let tmp = numbers.shift();
        return [...numbers,tmp]
    }
}