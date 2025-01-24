function solution(clothes) {
    var answer = 0;
    console.log(clothes);
    var types = new Map();
    for(var [name,type] of clothes){
        if(types.has(type)){
            types.set(type,types.get(type)+1);
        }else{
            types.set(type,2);
        }
    }
    return [...types.values()].reduce((a,b)=>a*b)-1;
}