// 모든 숫자를 나눌 수 있고, 모든 숫자를 못나누는 것
// 숫자는 1억 -> DP못씀
// 배열 길이 = 50만

function solution(arrayA, arrayB) {
    // let totalSet = new Set([...arrayA,...arrayB])
    // // if(totalSet.size!=arrayA.length*2){
    // //     return 0;
    // // }

    let minA = arrayA.sort((a,b)=>a-b)[0];
    let minB = arrayB.sort((a,b)=>a-b)[0];
    
    let resA = getDivides(minB,arrayB,arrayA);
    let resB = getDivides(minA,arrayA,arrayB);
    
    let answer =Math.max(...resA,...resB,0);
    
    return answer;
}

function getDivides(min,arr,arr2){
    let tmp = [];
    let result= [];
    for(let i=1; i<=Math.sqrt(min); i++){
        if(min%i===0){
            tmp.push(i);
            tmp.push(min/i);
        }
    }
    for(let num of tmp){
        let isValid = true;
        for(let arrNum of arr){
            if(arrNum%num!=0){
                isValid = false;
                break;
            }
        }
        if(isValid) result.push(num);
    }
    result = result.filter((v)=>{
        for(var o of arr2){
            if(o%v===0) return 0;
        }
        return 1;
    })
    return result;
}