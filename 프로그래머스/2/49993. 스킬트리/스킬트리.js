function solution(skill, skill_trees) {
    var answer = 0;
    for(let skill_tree of skill_trees){
        answer+=checkValidate(skill_tree);
    }

    function checkValidate(st){
        let lstIdx=0;
        for(let i=0; i<st.length; i++){
            let index = skill.indexOf(st[i]);
            if(index===-1) continue;
            if(index===lstIdx){
                lstIdx++;
            }else{
                return false;
            }
        }
        return true;
    }
    return answer;
}