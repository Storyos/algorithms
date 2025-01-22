function makeMultiSet(str){
    var tmp = new Map();
    for(let i=0; i<str.length-1; i++){
        var sub = str.substring(i,i+2);
        if(sub.length==sub.replaceAll(/[^a-z]/g,"").length)
            if(tmp.has(str.substring(i,i+2))){
                tmp.set(str.substring(i,i+2),tmp.get(str.substring(i,i+2))+1);
            }else{
                tmp.set(str.substring(i,i+2),1);   
            }
    }
    return tmp;
}

function getIntersection(set1,set2){
    var tmp = 0;
    for(var key of set1.keys()){
        var set1Count = set1.get(key);
        if(set2.has(key)){
            var a = Math.min(set1Count,set2.get(key));
            tmp+=a;
        }
    }
    return tmp;
}
function getUnion(set1,set2){
    var tmp = 0;
    for(var key of set1.keys()){
        var set1Count = set1.get(key);
        if(set2.has(key)){
            var a = Math.min(set1Count,set2.get(key));
            tmp-=a;
        }
        tmp+=set1.get(key);
    }
    for(var key of set2.keys()){
        tmp+=set2.get(key);
    }
    return tmp;
}
function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    var str1Map = makeMultiSet(str1);
    var str2Map = makeMultiSet(str2);
    if(str1Map.size==0&&str2Map.size==0) return 65536
    var unionCnt = getUnion(str1Map,str2Map);
    var intCnt = getIntersection(str1Map,str2Map);
    var answer = parseInt(intCnt/unionCnt*65536);
    return answer;
}