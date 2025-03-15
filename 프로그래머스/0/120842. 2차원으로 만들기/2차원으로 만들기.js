function solution(num_list, n) {
    var answer = [];
            let tmp = [];
    for(let i=0; i<num_list.length; i++){
        tmp.push(num_list[i]);
        if(tmp.length===n){
            answer.push([...tmp]);
            tmp=[];
        }
    }
    return answer;
}