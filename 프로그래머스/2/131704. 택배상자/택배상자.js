function solution(order) {
    var answer = 0;
    let n = order.length;
    let stack = [];
    let cnt =0;
    order =order.reverse();
//     메인 컨테이너에서 다 넣는 과정
    for(let i=1; i<=n; i++){ 
        if(order[order.length-1]==i){
            order.pop();
            cnt++;
        }else if(stack[stack.length-1]===order[order.length-1]){
            stack.pop();
            order.pop();
            cnt++;
        }else stack.push(i);
        while(stack.length>0){
            if(order[order.length-1]==stack[stack.length-1]){
                stack.pop();
                order.pop();
                cnt++;
            }else break;
        }
    }
    return cnt;
}