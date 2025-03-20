function solution(n, s) {
    var answer = [];
//     원소의 합이 S가 되는 수의 집합
//     각 원소의 곱이 최대가 되는 집합
//     그럼일단 s를 n으로 나누고 floor하고 각각 +?
    let arr = new Array(n).fill(Math.floor(s/n));
    let sum = arr.reduce((acc,num)=>acc+=num,0);
    let rest = s-sum;
    if(rest===0){
        return arr;
    }
    else{
        let tmp = Math.floor(rest/n);
        for(let i=0; i<arr.length; i++){
            arr[i]+=tmp;
            rest-=tmp;
        }
        for(let i=arr.length-1; rest>0; i--){
            arr[i]++;
            rest--;
        }
    }
    
    return arr[0]===0?[-1]:arr;
}

// 합이 최대 1억

// 자연수 N개로 이루어진 집합
