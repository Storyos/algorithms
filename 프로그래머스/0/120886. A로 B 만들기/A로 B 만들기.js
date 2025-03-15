function solution(before, after) {
    
    let aMap = new Map();
    for(let a of before){    
        aMap.has(a)?aMap.set(a,aMap.get(a)+1):aMap.set(a,1);
    }
    for(let b of after){
        if(!aMap.has(b)) return 0;
        else{
            if(aMap.get(b)>=1){
                aMap.set(b,aMap.get(b)-1);
            }else{
                return 0;
            }
        }
    }
    return 1;
}