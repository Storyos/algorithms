function solution(storey) {
    var answer = 0;
    let len = storey.toString().length+1;
    let arr = storey.toString().split('').map(Number).reverse();
    arr.push(0);
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]===10){
            arr[i+1]++;
        }else{
            if(arr[i]<=4){
                answer+=arr[i];
            }else if(arr[i]>5){
                arr[i+1]++;
                answer+=(10-arr[i]);
            }else{
                if(arr[i+1]>=5){
                    arr[i+1]++;
                }
                answer+=5;
            }
        }
    }
    answer+=arr.pop();
    return answer;
}