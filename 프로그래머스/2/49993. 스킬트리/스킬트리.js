function solution(skill, skill_trees) {
    let answer =0;
    let skill_seq=skill.split("");
    let skillMap = new Map();
    for(let i=0; i<skill_seq.length; i++){
        skillMap.set(skill_seq[i],i);
    }
    
    for(var tree of skill_trees){
        let tmp = tree.split("");
        let level = 0;
        let isValid = true;
        for(let i=0; i<tmp.length; i++){
//             스킬트리에 있는 스킬을 배우는 경우
            if(skillMap.has(tmp[i])){
                if(skillMap.get(tmp[i])===level){
                    level++;
                }else{
                    isValid = false;
                    break;
                }
            }
        }
        if(isValid){
            answer++;
        }
    }
    
    return answer;
}