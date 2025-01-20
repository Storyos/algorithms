function getCharCode(str){
    var tmp =[];
    for(let i=0; i<str.length; i++){
        tmp.push(str.charCodeAt(i));
    }
    return tmp;
}

function addIndex(s,skip,index){
    for(let i=0; i<s.length; i++){
        var tmp_index= index;
        for(let j=0; j<tmp_index; j++){
            s[i]++;
            if(s[i]>122){
                s[i]-=26;
            }
            for(let k = 0; k<skip.length;k++){
                if(s[i]==skip[k]){
                    tmp_index++;
                }
            }
        }
    }
    return s;
}

function solution(s, skip, index) {
    var answer = '';
    var sCharCode = getCharCode(s);
    var skipCharCode = getCharCode(skip);
    var added = addIndex(sCharCode,skipCharCode,index);
    

    for(let i=0; i<added.length; i++){
        answer+=String.fromCharCode(added[i]);
    }
    return answer;
}