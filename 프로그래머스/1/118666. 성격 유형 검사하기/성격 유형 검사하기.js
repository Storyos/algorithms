var typeMap;
const types = ['R','T','C','F','J','M','A','N'];

function initTypeMap(){
    var typeMap = new Map();
    for(var type of types){
        typeMap.set(type,0);
    }
    return typeMap;
}

function checking(surveyMap, choice){
    var a = surveyMap[0];
    var b = surveyMap[1];
    if(choice<=3){
        var score = 4-choice;
        typeMap.set(a,typeMap.get(a)+score);
    } else{
        var score = choice-4;
        typeMap.set(b,typeMap.get(b)+score);
    }
}

function getResult(){
    var answer = "";
    for(let i=0; i<types.length-1; i=i+2){
        answer+=typeMap.get(types[i])>=typeMap.get(types[i+1])?types[i]:types[i+1];
    }
    return answer;
}


function solution(survey, choices) {
    var surveyMap = survey.map((a)=>a.split(""));
    typeMap = initTypeMap();
    
    for(let i=0;i<choices.length; i++){
        checking(surveyMap[i],choices[i]);
    }
    var answer = getResult();
    return answer;
}
