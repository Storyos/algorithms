function solution(enroll, referral, seller, amount) {
    let answer = [];
    let memberList = new Map();
    let result = new Map();
    for(let i=0; i<enroll.length; i++){
        memberList.set(enroll[i],referral[i]); 
        result.set(enroll[i],0);
    }
    for(let i=0; i<amount.length; i++){
        getSelling(seller[i],amount[i]*100);
    }
    for(let i=0; i<enroll.length; i++){
        answer.push(result.get(enroll[i]));
    }
    function getSelling(name,price){
        if(price<10){
            // 10%를 계산한 금액이 1원 미만일 경우
            result.set(name,result.get(name)+price);
            return;
        }else{
            // 그 외에 절사해야되는 경우
            let jeolsa = Math.floor(price/10);
            let earns = price-jeolsa;
            let sangsa = memberList.get(name);
            result.set(name,result.get(name)+earns);
            // 그 위가 root인경우는 넘김
            if(sangsa==="-") return;
            getSelling(sangsa,jeolsa);
        }
    }
    return answer;
}