// 사용되는 로봇 : x대
// 1초마다 4방향으로 이동함 -> r좌표 우선이동
// 운송 경로는 m개의 포인트로 구성
// 이동중 같은 좌표에 로봇이 2대 이상일때 충돌위험

// points는 각 포인트를 담은곳
// routes는 각 로봇의 운송경로를 담은곳 -> routes의 길이 = 로봇 개수

//routes : 운송경로
function solution(points, routes) {
    var answer = 0;
    const dir = [[1,0],[-1,0],[0,1],[0,-1]];
    const 로봇개수 = routes.length;
    const 지점개수 = points.length;
    const 로봇위치 = new Map();
    let goal = new Array(로봇개수+1);
    let time = 1;
    //제일 처음위치잡기
    for(let i=1; i<=로봇개수; i++){
        로봇위치.set(i,points[routes[i-1][0]-1]);
        routes[i-1].shift();
        goal[i]=routes[i-1];
    }
    
    while(로봇위치.size>1){
        checkDuplicate();
        for(let key of 로봇위치.keys()){
            let [r,c] = 로봇위치.get(key);
            moving(key,r,c);
        }
        time++;
    }
    return answer;
    function checkDuplicate(){
            let duplicateSet = new Set();
            let tmp = [...로봇위치.keys()].sort();
        
    for(let base = 0; base<tmp.length; base++){
        const 가공베이스 = 로봇위치.get(tmp[base]).join(",");
        for(let target =base+1; target<tmp.length; target++){
            const 가공타겟 = 로봇위치.get(tmp[target]).join(",");
            if(base!=target&&가공베이스===가공타겟){
                duplicateSet.add(가공베이스);
            }
        }
    }
        answer+=duplicateSet.size;
    }
    function moving(robotNum,r,c){
        let [gr,gc]= points[goal[robotNum][0]-1];
        if(gr===r&&gc===c){
            goal[robotNum].shift();
            if(goal[robotNum].length===0){
            로봇위치.delete(robotNum);
            return;
            }
            [gr,gc]=points[goal[robotNum][0]-1];
        }
        if(gr>r){
            로봇위치.set(robotNum,[r+1,c]);
        }else if(gr<r){
            로봇위치.set(robotNum,[r-1,c]);
        }
        else{
            if(gc>c){
                로봇위치.set(robotNum,[r,c+1]);
            }else{
                로봇위치.set(robotNum,[r,c-1]);
            }
        }
    }
}
