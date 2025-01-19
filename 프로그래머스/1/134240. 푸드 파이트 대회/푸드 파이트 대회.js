//제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 오른쪽에서 왼쪽으로
// 수웅이 멍청이


function solution(food) {
    var answer = '';
    var tmp = '';
    for(let i=1; i<food.length; i++){
        if(food[i]%2!=0){
            food[i]-=1;
        }
        tmp+=i.toString().repeat(food[i]/2);
    }
    console.log(tmp);
    answer=tmp+"0"+tmp.split("").reverse().join("");
    return answer;
}