function solution(files) {
    var answer = [];
//     파일명은 영문자로 시작하며, 숫자를 하나 이상 포함한다.
//     HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한글자 이상
//     NUMBER는 1~5 글자
//     TAIL은 아무거나 가능
    
//     HEAD 를 기준으로 사전순으로 정렬
    let arr =[];
    for(let i=0; i<files.length; i++){
        let start=-1;
        let end = 0;
        for(let j=0; j<files[i].length; j++){
            if(files[i].charAt(j)>='0'&&files[i].charAt(j)<='9'){
                if(start==-1) 
                {   start = j;
                    end=j;
                }
                else end = j;
            }
        }
        arr.push([i,files[i].substring(0,start).toUpperCase(),parseInt(files[i].substring(start,end+1))]);
    }
    arr.sort((a,b)=>{
        if(a[1]===b[1]){
            if(a[2]==b[2]){
                return a[0]-b[0];
            }
            return a[2]-b[2];
        }
        return a[1].localeCompare(b[1]);
    })
    for(let i=0; i<files.length; i++){
        answer.push(files[arr[i][0]]);
    }
    return answer;
}