
function solution(keymap, targets) {
    var answer = [];
    var tmp = new Map();
    
    for(var keyset of keymap){
       for(let i=0; i<keyset.length; i++){
           if(tmp.has(keyset[i])){
               if(i+1<tmp.get(keyset[i])){
                    tmp.set(keyset[i],i+1);   
               }
           }
           else{
               tmp.set(keyset[i],i+1);
           }
       }
    }
    
    for(let i=0; i<targets.length; i++){
        var sum = 0;
        for(let j=0; j<targets[i].length; j++){
            if(tmp.has(targets[i][j]))
            sum+=tmp.get(targets[i][j]);
            else{
                sum=-1;
                break;
            }
        }
        answer.push(sum);
    }
    
    
    return answer;
}