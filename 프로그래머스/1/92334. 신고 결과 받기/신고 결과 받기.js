var idMap;
var reportMap;
function initId(id_list){
    var tmp = new Map();
    for(let i=0; i<id_list.length; i++){
        tmp.set(id_list[i],i);
    }
    return tmp;
}

function reporting(reports){
    
    for(var report of reports){
    var [from,to] = report.split(' ');
    reportMap[idMap.get(to)][idMap.get(from)]=true;
    }
    return reportMap;
}

// 여기서 일단 k이상 받은사람 찾기
function acc(reportMap,k){
    var reported =[];
    for(let i=0; i<reportMap.length; i++){
        var tmp = 0;
        for(let j=0; j<reportMap.length; j++){
            if(reportMap[i][j]) tmp++;
        }
        if(tmp>=k){
            reported.push(i);
        }
    }
    return reported;
}

function sendMail(getReported,reportMap){
    var result = [];
    for(let i=0; i<reportMap.length; i++){
        var tmp = 0;
        for(var idx of getReported){
            if(reportMap[idx][i]) tmp++;
        }
        result.push(tmp);
    }
    return result;
}

function solution(id_list, report, k) {
    reportMap = Array.from(Array(id_list.length),()=>Array(id_list.length).fill(false));
    idMap = initId(id_list);
    reportMap = reporting(report);
    
    var getReported = acc(reportMap,k);
    
    
    var answer = sendMail(getReported,reportMap);
    return answer;
}