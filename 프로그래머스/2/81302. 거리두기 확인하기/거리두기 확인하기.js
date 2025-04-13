function solution(places) {
    var answer = new Array(places.length).fill(1);
    const dir = [[1,0],[0,1],[-1,0],[0,-1]];
    for(var k = 0; k<places.length; k++){
    var place = places[k];

    var valid = true;
    for(var i=0; i<place.length; i++){
        for(var j=0; j<place[0].length; j++){
            if (place[i][j] === 'P') {
  const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
  if (!checking(i, j, 0, visited)) {
    answer[k] = 0;
    valid = false;
    break;
  }
}

        }
        if(!valid) break;    
    }
    }
    function checking(x, y, count, visited) {
  if (count > 0 && place[x][y] === 'P') return false;
  if (count === 2) return true;

  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];
    if (
      nx >= 0 && ny >= 0 && nx < 5 && ny < 5 &&
      !visited[nx][ny] && place[nx][ny] !== 'X'
    ) {
      if (!checking(nx, ny, count + 1, visited)) {
        return false;
      }
    }
  }

  return true;
}

    
    return answer;
}