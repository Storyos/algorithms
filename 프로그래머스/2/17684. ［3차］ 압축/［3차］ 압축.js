var answer = [];

function solution(msg) {
    let dict = initDict();
    // console.log(dict);
    while(msg.length>0){
    let [dictToAdd,answerAdd,startIdx] = findWord(msg,dict);
    answer.push(dict.get(answerAdd));
    if(!dict.has(dictToAdd)){
    dict.set(dictToAdd,dict.size+1);
    }
    msg= msg.substring(startIdx,msg.length+1);
    }
    return answer;
}

// Step 1 : 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
function initDict(){
    let tmp = new Map();
    for(let i=1; i<=26; i++){
        tmp.set(String.fromCharCode(i+64),i);
    }
    return tmp;
}

function findWord(keyword,dict){
    if(dict.has(keyword)){
        return [keyword,keyword,keyword.length];
    }
    let cur=keyword.substring(0,1);
    let next=keyword.substring(0,2);    
    for(let i=1; i<keyword.length; i++){
        cur=keyword.substring(0,i);
        next=keyword.substring(0,i+1);
        if(dict.has(cur)&&!dict.has(next)){
            console.log("찾은 가장 긴 문자열",cur);
           return [next,cur,i];
         }
    }
    return [next,cur,1];
}