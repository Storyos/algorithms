function solution(n, m, section) {
    // n : 전체 길이
    // m : 룰러의 길이
    var answer = 0;
    var wall = new Array(n+1).fill(false);
    for(let i=0; i<section.length; i++) {
        wall[section[i]]=true;
    }
    for(let i=1; i<wall.length; i++) {
        if(wall[i]){
            for(let j=i; j<i+m; j++){
                wall[j]=false;
            }
            answer++;
        }
    }
    
    return answer;
}