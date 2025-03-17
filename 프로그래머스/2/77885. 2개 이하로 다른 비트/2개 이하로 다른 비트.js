// f(x) : x보다 크고 x와 비트가 1~2개 다른 수 들 중에서 제일 작은 수
// f(2) = 3
// 2보다 크고 0010 -> 0011 => 1개 다름
// f(7) = 11
// 0111 -> 1011 -> 
function solution(numbers) {
    var answer = [];
    for(var num of numbers){
        let result = parseInt(getResult(num.toString(2)),2);
        answer.push(result);
    }
    return answer;
}
function getResult(numBit){
//     1111 일때 10111
//     1000 일때 1001
//     1011 일때 1101
//     전부다 1이 아니면 그냥 맨끝에서 0인거 찾아서 1로 바꾸고
//     그 전에 꺼 0으로 바꿈
    let tmp = numBit.split(''); 
    let len = numBit.length;
    console.log(tmp[len-1]);

    if(tmp[len-1]==='0'){
        tmp[len-1]=1;
        return tmp.join('');
    }
    else{
       for(let i= len-1; i>0; i--){
           if(tmp[i]==='0'){
               tmp[i]=1;
               tmp[i+1]=0;
               return tmp.join('');
           }
       }
        tmp[0]=0;
        return "1"+tmp.join('');
    }
    
}
