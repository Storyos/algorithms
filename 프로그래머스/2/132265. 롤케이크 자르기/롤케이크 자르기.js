function solution(topping) {
    var answer = 0;
    var Amap = new Map();
    var Bmap = new Map();
   topping.map((a,b)=>{
        if(Bmap.has(a)){
            Bmap.set(a,Bmap.get(a)+1)
        }else{
            Bmap.set(a,1);
        }
    });
    for(var top of topping){
        if(Amap.has(top)){
            Amap.set(top,Amap.get(top)+1);
        }else{
            Amap.set(top,1);
        }
        Bmap.set(top,Bmap.get(top)-1);
        if(Bmap.get(top)==0) Bmap.delete(top);
        
        if(Amap.size==Bmap.size) answer++;
    }
    
    return answer;
}