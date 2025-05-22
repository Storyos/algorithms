// 1~ 100숫자카드 

function solution(cards) {
    //임의의 상자 하나를 선택해서 선택한 상자 안의 숫자 카드를 확인.
    //이미 열려있을때까지 반복
    //찾으면 빼고 남은걸로 똑같이 해서 이미열려있으면 종료
    // -> 1번 그룹 * 2번 그룹 = 점수
    //최고점수구하기
    let dict = new Map();
    for(let i=0; i<cards.length; i++){
        dict.set(i+1,cards[i]);
    }
    let answer = [];
        let visited = new Array(cards.length+1).fill(false);
        for(let i=1; i<=cards.length; i++){
            if(!visited[i]) game(i,1);
        }
    answer.sort((a,b)=>b-a);
    return answer[0]===cards.length?0:answer[0]*answer[1];
    function game(startIdx,count){
        visited[startIdx]=true;
        let nextIdx = dict.get(startIdx);
        if(visited[nextIdx]) {
            answer.push(count);
        return;
        }
        else game(dict.get(startIdx),count+1);
    }
}