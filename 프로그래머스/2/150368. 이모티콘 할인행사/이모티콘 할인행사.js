// n명의 카카오톡 사용자들에게 이모티콘 m개를 할인하여 판매
// 할인율은 10%/20%/30%/40% 중 하나
// 목표 : 1. 이모티콘 플러스 서비스 가입자를 최대한 늘리는 것
//  --> 최대한 판매액이 가격을 넘게 만들기
//  2. 이모티콘 판매액을 최대한 늘리는 것
function solution(users, emoticons) {
    var answer = [];
    const discountRate = [10,20,30,40];
//     이모티콘의 개수는 최대 7개
    var map= []
    greedy(map,0);
    answer.sort((a,b)=>{
        if(a[0]!=b[0]){
            return b[0]-a[0];
        }else{
            return b[1]-a[1];
        }
    });
    
    function calculator(emoDiscount){
        var [count,sales] = [0,0];
        for(var [rate,price] of users){
            var userSale = 0;
            for(let i=0; i<emoticons.length; i++){
                if(emoDiscount[i]>=rate){
                    userSale+=emoticons[i]*(100-emoDiscount[i])/100;
                }
                if(price<=userSale){
                    count++;
                    userSale=0;
                    break;
                }
            }
            sales+=userSale;
        }
        answer.push([count,sales]);
    }
    function greedy(map,idx){
        if(idx===emoticons.length){
            let emoDiscount = [...map];
            calculator(emoDiscount);
        }else{
            for(let i=0; i<4; i++){
                map.push(discountRate[i]);
                greedy(map,idx+1);
                map.pop();
            }
        }
    }
    
    
    return answer[0];
}