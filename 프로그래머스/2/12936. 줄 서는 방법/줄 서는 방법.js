function solution(n, k) {
    var answer = [];
    var [fArr,numBucket] = getFactorialArr(n);
//     k가 n!이면 역순 Return
    if(fArr[n]===k){
        return [...numBucket].sort((a,b)=>b-a);
    }
    var target = n-1;
    while(answer.length<=n){
        var tmp = [...numBucket].sort((a,b)=>a-b);
        if(k===0){
            answer= [...answer,...tmp.sort((a,b)=>b-a)];
            break;
        }
        else if(k<fArr[target]){
            answer.push(tmp[0]);
            numBucket.delete(tmp[0]);
            target--;
        }else if(k>=fArr[target]){
            var d = Math.ceil(k/fArr[target]);
            answer.push(tmp[d-1]);
            numBucket.delete(tmp[d-1]);
            k=k%fArr[target];
            target--;
        }

    }
    
    
    return answer;
}

function getFactorialArr(n){
    var arr = [];
    var numBucket = new Set();
    arr.push(1);
    for(var i = 1; i<=n; i++){
        arr.push(arr[i-1]*i);
        numBucket.add(i);
    }
    return [arr,numBucket]
}