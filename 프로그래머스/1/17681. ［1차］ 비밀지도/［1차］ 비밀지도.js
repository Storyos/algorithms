function decodingMap(n,arr){
    var tmp = [];
    for(let i=0; i<arr.length; i++) {
       var line = arr[i].toString(2);
        var a = "0".repeat(n-line.length);
        line = a+line;
        tmp.push(line);
    }
    return tmp;
}

function compareMap(map1,map2){
    var map = [];
    for(let i=0; i<map1.length; i++){
        var line = '';
        for(let j=0; j<map1[i].length; j++){
            if(map1[i][j]==1||map2[i][j]==1){
                line+="#";
            }else{
                line+=" ";
            }
        }
        map.push(line);
    }
    return map;
}

function solution(n, arr1, arr2) {
    var answer = [];
    var map1 = decodingMap(n,arr1);
    var map2 = decodingMap(n,arr2);
    
    answer = compareMap(map1,map2);
    
    return answer;
}