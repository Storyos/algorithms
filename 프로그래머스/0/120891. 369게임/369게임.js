function solution(order) {
    let answer = 0;
    let tmp = order.toString().split('');
    for(let i=0; i<tmp.length; i++){
        if(tmp[i]==3||tmp[i]==6||tmp[i]==9){
            answer++;
        }
    }
    return answer;
}