function solution(arr) {
    let visited = Array.from(Array(arr.length),()=>Array.from(arr.length).fill(false));
    let answer = new Array(2).fill(0);
    for(let size = arr.length; size>=1; size/=2 ){
        for(let i=0; i<arr.length; i+=size){
            for(let j=0; j<arr.length; j+=size){
                if(!visited[i][j]){
                checking(i,j,size);
                }
            }
        }

    }
    return answer;
    
    function checking (x,y,size){
        let target = arr[x][y];
        for(let i=x; i<x+size; i++){
            for(let j=y; j<y+size; j++){
                if(target!=arr[i][j]){
                    return;
                }
            }
        }
        answer[target]++;
//         여기까지 왔으면 4개가 통일된거
        for(let i=x; i<x+size; i++){
            for(let j=y; j<y+size; j++){
                visited[i][j]=true;
            }
        }
    }
}
