function solution(routes) {
    var answer = 0;
    routes.sort((a,b)=>a[1]-b[1]);
    let curCam = -30001;
    for(let i=0; i<routes.length; i++){
        if(curCam<routes[i][0]){
            answer++;
            curCam=routes[i][1];
        }
    }
    return answer;
}