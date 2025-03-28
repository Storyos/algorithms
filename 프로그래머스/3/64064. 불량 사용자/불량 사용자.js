// 같은 응모자 아이디가 중복해서 제재 아이디 목록에 들어가는 경우는 없다.

function solution(user_id, banned_id) {
    
    var banArr = [];
    for(var b of banned_id){
        banArr.push(getBannedFromUser(b));
    }
    let arr = new Set();
    let answer = new Set();
    combination(arr,0,banned_id.length);
    
    return answer.size;
    
function combination(arr,count, r){
    if(count===r){
        let tmp = [...arr.values()].sort().join("");
        answer.add(tmp);
        return;
    }else{
        for(var id of banArr[count]){
            if(!arr.has(id)){
                arr.add(id);
                combination(arr,count+1,r)
                arr.delete(id);
            }
        }   
    }
}
    
function getBannedFromUser(banned){
    var wildCard = 0;
    let tmp = [];
    for(var u of user_id){
        var isValid = true;
//         글자수가 다르면 애초에 틀림
        if(u.length != banned.length){
            isValid = false;
            continue;
        }
        for(let i=0; i<u.length; i++){
         if(banned[i]==="*") continue;
            if(banned[i]!=u[i]){
                isValid = false;
            }
        }
        if(isValid){
            tmp.push(u);
        }
    }
    return tmp;
}
}

// 즉 겹치는 패턴이 있으면 합집합으로 구해야됨.