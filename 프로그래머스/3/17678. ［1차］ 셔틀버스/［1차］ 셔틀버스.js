function solution(n, t, m, timetable) {
    var answer = '';
    let uniqueTT = new Set();
    timetable.sort((a,b)=>{
        let [ahour,amin] = a.split(":").map(Number);
        let [bhour,bmin] = b.split(":").map(Number);
        if(ahour===bhour){
            return amin-bmin;
        }
        return ahour-bhour;
    })
    
    let bustime = "09:00";
    let curSize = 0;
    let tansaram = 0;
    let lastTime="09:00";
    for(let i=0; i<n; i++){
        curSize = 0;
        while(timetable[tansaram]&&compareTime(bustime,timetable[tansaram])&&curSize<m){
            lastTime = timetable[tansaram];
            tansaram++;
            curSize++;
        }
        lastTime = compareTime(lastTime,bustime)?lastTime:bustime;
        bustime = addTime(bustime,t)
    }
    let tmptime;
    if(m-curSize>0){
        tmptime = lastTime;
    }else{
        tmptime = subTime(timetable[tansaram-1],1);
    }
    return formatting(tmptime);
    function formatting(time){
        let [H,M] = time.split(":").map(Number);
        if(H<10){
            H = "0"+H;
        }
        if(M<10){
            M = "0"+M;
        }
        return H+":"+M;
    }
    function subTime(time,t){
        let [H,M] = time.split(":").map(Number);
        if(M-t<0){
            M = M-t+60;
            H--;
        }else{
            M = M-t;
        }
        return H+":"+M;
    }
    function addTime(bustime,t){
        let [busH,busM] = bustime.split(":").map(Number);
        if(busM+t>=60){
            busM %=60;
            busH++;
        }else{
            busM+=t;
        }
        return busH+":"+busM;
    }
    function compareTime(bustime,crewtime){
        const [busH,busM] = bustime.split(":").map(Number);
        const [crewH,crewM] = crewtime.split(":").map(Number);
        if(crewH===busH){
            return crewM<=busM?true:false;
        }else{
            return crewH<busH?true:false;
        }
    }
    return answer;
}