function solution(genres, plays) {
    var answer = [];
    let len = genres.length;
    let genreMap = new Map();
    for(let i=0; i<len; i++){
            if(!genreMap.has(genres[i])){
                genreMap.set(genres[i],{"totalPlay":plays[i],"num":[i]});
            }
        else{
            let gI = genreMap.get(genres[i]);
            genreMap.set(genres[i],{"totalPlay":gI.totalPlay+plays[i],"num":[i,...gI.num]});
        }
    }
    let arr = [...genreMap];
    arr.sort((a,b)=>b[1].totalPlay-a[1].totalPlay);
    
    for(let i=0; i<arr.length ;i++){
        arr[i][1].num.sort((a,b)=>{
            if(plays[b]===plays[a]){
                return a-b;
            }else{
                return plays[b]-plays[a];
            }
        });
        answer.push(arr[i][1].num[0]);
        if(arr[i][1].num.length>=2){
            answer.push(arr[i][1].num[1]);
        }
    }
    
    return answer;
}