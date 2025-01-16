function initTerms(terms){
    var tmp = new Map();
    for(var term of terms){
        term = term.split(" ");
        tmp.set(term[0],parseInt(term[1]));
    }
    return tmp;
}

function getExpiredDate(termMap,privacy){
    var [privacyDate,privacyTerm] = privacy.split(" ");
    privacyDate = new Date(privacyDate);
    privacyDate.setMonth(privacyDate.getMonth()+termMap.get(privacyTerm));
    return privacyDate;
}
function solution(today, terms, privacies) {
    var answer = [];
    var termMap = initTerms(terms);
    var date = new Date(today);
    var tmp = [];
    for(let i=0; i<privacies.length; i++){
    if(date>=getExpiredDate(termMap,privacies[i])){
        answer.push(i+1);
    }        
    }
    return answer;
    
}