function canSwitch(start, target){
    var cnt = 0;
    for(let i=0; i<start.length; i++){
        if(start[i]!=target[i]){
            cnt++;
        }
        if(cnt>=2){
            return false;
        }
    }
    return true;
}
function initWords(words){
        var array = Array.from(Array(words.length),
                               ()=> new Array(words.length).fill(false));
    for(let i=0; i<array.length; i++){
        for(let j=i; j<array.length; j++){
            array[i][j]=array[j][i]=canSwitch(words[i],words[j]);
        }
    }
    return array;
}

function solution(begin, target, words) {
    var answer = 0;
    words = [begin,...words];
    if(words.indexOf(target)<0) return 0;
    var arr = initWords(words);
    var visited = Array.from(words.length).fill(false);
    
    var queue = [[0,0]];
    var count = 10000;
    var depth = 1;
    while(queue.length>=1){
//         큐에서 index값을 뽑자
        var [word,depth]= queue[0];
        console.log("DEPTH:",word);
        console.log("현재 단어:",words[word]);
        if(words[word]==target){
            count= Math.min(count,depth);
            break;
        }
        visited[word]=true;
        queue.shift();
        for(let i=0; i<words.length; i++){
            if(!visited[i]&&arr[i][word]){
                queue.push([i,depth+1]);
            }
        }
    }
    return count;
}