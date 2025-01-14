function initDir(){
    var tmp = new Map();
    tmp.set("S",[1,0]);
    tmp.set("N",[-1,0]);
    tmp.set("E",[0,1]);
    tmp.set("W",[0,-1]);
    return tmp;
}
function getStartingPoint(park){
    for(let i=0; i<park.length; i++) {
        for(let j=0; j<park[0].length; j++){
            if(park[i][j]=="S"){
                return [i,j];
            }
        }
    }
}

function checking(pos,dirMap,park,route){
    var dir = dirMap.get(route.split(" ")[0]);
    var dis = route.split(" ")[1];
    var w = park[0].length;
    var h = park.length;
    var new_pos;
    for(let i=1; i<=dis; i++){
        new_pos = [pos[0]+(dir[0]*i),pos[1]+(dir[1]*i)]

        if(new_pos[0]>=h||  
           new_pos[0]<0 || 
           new_pos[1]>=w|| 
           new_pos[1]<0  
          ){
         console.log("공원 밖으로 나감");
        return pos;
        }
        else if(park[new_pos[0]][new_pos[1]]=="X"){
            return pos;
        }
    }
    return new_pos; 
}

function solution(park, routes) {
    // cur_pos[0] : 세로 
    // cur_pos[1] : 가로
    var cur_pos = getStartingPoint(park);
    var dirMap = initDir();
    console.log(cur_pos);
    
    for(let i=0; i<routes.length; i++){
        cur_pos = checking(cur_pos,dirMap,park,routes[i]);
    }
    
    return cur_pos; 
}