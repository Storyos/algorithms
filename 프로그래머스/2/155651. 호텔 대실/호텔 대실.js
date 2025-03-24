// GOAL : 최소한의 객실 사용
// Mission : 한 번 사용한 객실은 퇴실 시간을 기준으로 10분 이후 사용가능

function solution(book_time) {
    var answer = 1;
    let roomInfo = [];
//     끝나는 시간 기준으로 정렬
    book_time.sort((a,b)=>a[1].localeCompare(b[1]));
    for(let [start,end] of book_time){
        
        if(roomInfo.length===0){
            roomInfo.push(addTenMin(end));
            continue;
        }
        let isChecked= false;
        for(let t=roomInfo.length-1; t>=0; t--){
            if(!comparing(start,roomInfo[t])){
                roomInfo[t]=addTenMin(end);
                isChecked=true;
                break;
            }
        }
        if(!isChecked){
            answer++;
            roomInfo.push(addTenMin(end));
        }
        
        roomInfo.sort((a,b)=>{
            let tmp1 = a.split(":").map(Number);
            let tmp2 = b.split(":").map(Number);
            if(tmp1[0]===tmp2[0]){
                return tmp1[1]-tmp2[1];
            }
            return tmp1[0]-tmp2[0];
        });
    }
    return answer;
}
function comparing(t1,t2){
    let [h1,m1]=t1.split(":").map(Number);
    let [h2,m2]=t2.split(":").map(Number);
    return h1===h2?m1<m2:h1<h2;
}
function addTenMin(time){
    let [h,m] = time.split(":").map(Number);
    if(m+10>=60){
        m = (m+10)%60;
        h++;
    }else{
        m=m+10;
    }
    return h+":"+m;
}