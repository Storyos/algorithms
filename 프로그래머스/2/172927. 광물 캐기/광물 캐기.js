function solution(picks, minerals) {
//     결국 5개씩 끊어서 써야됨.
    const mineralInfo = {"diamond":25, "iron":5, "stone":1};
    var arr = [];
    var minableAmount = picks.reduce((acc,num)=>acc+=num*5,0);
    
    for(var i=0; i<Math.min(minerals.length,minableAmount); i+=5){
        var tmp =0 ;
        for(var j=i; j<i+5; j++){
            if(!minerals[j]) tmp+=0;
            else tmp+=mineralInfo[minerals[j]];
        }
        arr.push([tmp,i]);
    }
    
    arr.sort((a,b)=>(b[0]-a[0]));
    
    var piro = 0;
    for(var [sum,idx] of arr){
        var miner;
        if(picks[0]>0){
            miner = 25;
            picks[0]--;
        }else if(picks[1]>0){
            miner = 5;
            picks[1]--;
        }else if(picks[2]>0){
            miner = 1;
            picks[2]--;
        }else{
            break;
        }
        for(var i=idx; i<idx+5; i++){
               if(i>=minerals.length) break;
               piro+=Math.ceil(mineralInfo[minerals[i]]/miner);
        }
    }
    
    
    return piro;
}