function solution(name, yearning, photo) {
    var answer = [];
    var tmp = new Map();
    for(let i=0; i<name.length; i++) {
        tmp.set(name[i],yearning[i]);
    }
    for(let i=0; i<photo.length; i++){
        let sum =0 ;
        for(let j=0; j<photo[i].length; j++){
            if(tmp.get(photo[i][j]))
            sum+=tmp.get(photo[i][j]);
        }
        answer.push(sum);
    }
    return answer;
}