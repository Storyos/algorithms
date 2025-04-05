function solution(info, edges) {
  let answer = 0;
  let connectedNode = Array.from({ length: info.length }, () => []);

  for (let i = 0; i < edges.length; i++) {
    let current = edges[i];
    connectedNode[current[0]].push(current[1]);
  }

  function dfs(currentNode, sheep, wolf, possible) {
      
    let newPossibles = [...possible];
    let currentIndex = newPossibles.indexOf(currentNode);
    if (info[currentNode]) {
      wolf++;
    } else {
      sheep++;
    }
    answer = Math.max(answer, sheep);
    if (sheep === wolf) {
      return;
    }
    newPossibles.push(...connectedNode[currentNode]);
    newPossibles.splice(currentIndex, 1);
     console.log(newPossibles);
    for (const nextNode of newPossibles) {
      dfs(nextNode, sheep, wolf, newPossibles);
    }
  }

  dfs(0, 0, 0, [0]); // DFS를 사용해 모든 경로를 탐색

  return answer; // 모든 경로를 탐색후 최대 값인 answer를 반환
}