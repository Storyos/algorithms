const readline = require('readline');

const rl = readline.createInterface({input:process.stdin});

let arr = [];
let n = 0, m = 0;
let lineCount = 0;
let r, c, d;
let visited;
const direction = {
    0: [-1, 0],
    1: [0, 1],
    2: [1,0 ],
    3: [0, -1]
};

rl.on('line', (line) => {
    if (n === 0) {
        [n, m] = line.split(" ").map(Number);
        lineCount++;
    } else if (lineCount === 1) {
        [r, c, d] = line.split(" ").map(Number);
        lineCount++;
    } else if (lineCount === n + 2) {
        rl.close();
    } else {
        arr.push(line.split(" ").map(Number));
        lineCount++;
    }
});

rl.on('close', () => {
    visited = arr.map(v => [...v]);
    let [init_x, init_y] = [r, c];
    robot(init_x, init_y);
    console.log(cleaningCount);
});

let cleaningCount = 0;

const robot = (x, y) => {
    let [cur_x, cur_y] = [x, y];
    while (true) {
        cleaning(cur_x, cur_y);
        let command = checking(cur_x, cur_y);
        
        if (command === 2) {
            let back_x = cur_x + direction[d][0] * -1;
            let back_y = cur_y + direction[d][1] * -1;
            if (arr[back_x][back_y] === 1) {
                return;
            } else {
                cur_x = back_x;
                cur_y = back_y;
            }
        } else if (command === 3) {
            d = d ? d - 1 : 3;
            let next_x = cur_x + direction[d][0];
            let next_y = cur_y + direction[d][1];
            if (isInBounds(next_x, next_y) && visited[next_x][next_y] === 0) {
                cur_x = next_x;
                cur_y = next_y;
            }
        }
    }
};

const cleaning = (x, y) => {
    if (visited[x][y] === 0) {
        // console.log("여기청소",x,y);
        visited[x][y] = 1;
        cleaningCount++;
    }
};

const checking = (x, y) => {
    for (let i = 0; i < 4; i++) {
        let dir = direction[i];
        let next_x = x + dir[0];
        let next_y = y + dir[1];
        if (isInBounds(next_x, next_y) && visited[next_x][next_y] === 0) {
            return 3;
        }
    }
    return 2;
};

const isInBounds = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < m;
};

// 0 : uncleaned empty space
// 1 : wall
