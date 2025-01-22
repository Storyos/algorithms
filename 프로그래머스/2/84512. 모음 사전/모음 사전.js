function makeDict(){
    const word = ['','A','E','I','O','U'];
    var dict = new Set(); 
    for(let a = 0; a< 6; a++){
        for(let b = 0; b<6; b++){
            for(let c =0; c<6; c++){
                for(let d=0; d<6; d++){
                    for(let e=1;e<6; e++){
                        var tmp = word[e]+word[d]+word[c]+word[b]+word[a];
                                dict.add(tmp);
                    }
                }
            }
        }
    }
    return dict;
}
function solution(word) {
    var answer = 0;
    var dict = makeDict();
    var tmp = [...dict];
    tmp.sort((a,b)=>a.toString().localeCompare(b.toString()));
    for(let i=0; i<tmp.length; i++){
        if(word==tmp[i]){
            return i+1;
        }
    }
    return answer;
}