function solution(a) {
    let tmp = [];
    let exception = [];
    var answer = 2;
    if(a.length<=2){
        return a.length;
    }
    
    let rightMinInfo = [];
    rightMinInfo.push([a[a.length-1],a.length-1]);
    for(let i=a.length-2; i>0; i--){
        let [minValue,minIndex] = rightMinInfo[rightMinInfo.length-1];
        if(a[i]<minValue){
            rightMinInfo.push([a[i],i]);
        }else{
            rightMinInfo.push([minValue,minIndex]);
        }
    }
    let leftMin = a[0];
    for(let i=1; i<a.length-1; i++){
        let right = rightMinInfo.pop()[0];
        if(right>=a[i]||leftMin>=a[i]){
            answer++;
        }
        leftMin = Math.min(leftMin,a[i]);
    }
    return answer;
}