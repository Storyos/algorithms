function solution(sticker) {
    var answer = 0;
    const len = sticker.length;


//   첫번째 꺼를 안뜯는경우
    let dp2 = new Array(len).fill(0);
    dp2[0]=0;
    dp2[1]=sticker[1];
    for(let i=2; i<len; i++){
        if(dp2[i-1]===dp2[i-2]){
            dp2[i]=Math.max(dp2[i-1]+sticker[i],dp2[i-2]+sticker[i]);
        }else{
            dp2[i]=Math.max(dp2[i-1],dp2[i-2]+sticker[i]);
        }
    }
    
    //  첫번째 거를 뜯는경우 -> 마지막 거 못뜯음. 세번째부터
    let dp1 = new Array(len).fill(0);
    dp1[0]=sticker[0];
    dp1[1]=sticker[0];
    sticker[len-1]=0;
    for(let i=2; i<len; i++){
//         직전거 안뜯었으면
        if(dp1[i-1]===dp1[i-2]){
            dp1[i]=Math.max(dp1[i-1]+sticker[i],dp1[i-2]+sticker[i]);
        }else{
            dp1[i]=Math.max(dp1[i-1],dp1[i-2]+sticker[i]);
        }
    }

    return Math.max(dp1[len-1],dp2[len-1]);
}