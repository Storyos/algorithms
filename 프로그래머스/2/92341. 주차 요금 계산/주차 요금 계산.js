function solution(fees, records) {
    let [baseT,baseF,unitT,unitF] = fees;
    let inMap = new Map();
    let outMap = new Map();
    let cno= new Set();
    for(var record of records){
        let [time,num,inout] = record.split(" ");
        cno.add(num);
        if(inout==="IN"){
            if(inMap.has(num)){
                inMap.set(num,[time,...inMap.get(num)]);
            }else inMap.set(num,[time]);
        }else{
            if(outMap.has(num)){
                outMap.set(num,[time,...outMap.get(num)])
            }else outMap.set(num,[time]);
        }
    }
//     차량 번호순 정렬
    let tmp = [...cno].sort((a,b)=>a-b);
    var answer = [];
    for(var num of tmp){
    let [inTime,outTime] = getTotalTime(num);
    let totalTime = calTime(inTime,outTime);
    let totalFee = calFee(totalTime);
        answer.push(totalFee);
    }
    return answer;
    
    function calFee(totalTime){
        if(totalTime<=baseT) return baseF
        return baseF + Math.ceil((totalTime-baseT)/unitT)*unitF
    }
    
    function calTime(inTime,outTime){
        let sum = 0;
        for(let i=0; i<inTime.length; i++){
            let [inH,inM] = inTime[i].split(":").map(Number);
            let [outH,outM] = outTime[i].split(":").map(Number);
            let inTotal = inH*60+inM;
            let outTotal = outH*60+outM;
            sum+=outTotal-inTotal;
        }
        return sum;
    }
    
    
    function getTotalTime(num){
        if(!outMap.has(num)){
            outMap.set(num,['23:59']);
        }
        let inTime = inMap.get(num);
        let outTime = outMap.get(num);
        if(inTime.length!=outTime.length){
            outTime.push("23:59");
        }
        
        inTime.sort((a,b)=>a.localeCompare(b));
        outTime.sort((a,b)=>a.localeCompare(b));
        return [inTime,outTime];
    }
    
    
}