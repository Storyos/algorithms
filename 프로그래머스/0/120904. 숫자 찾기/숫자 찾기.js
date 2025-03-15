function solution(num, k) {
    var answer = -1;
    let tmp = num.toString().split('');
    for(let i=0; i<tmp.length; i++){
        if(tmp[i]==k){
            answer=i+1;
            break;
        }
    }
    return answer;
}