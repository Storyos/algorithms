const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N, R, Q;
let treeData;
let queries = [];
//정점 U를 루트로 하는 서브트리에 속한 정점의 수
rl.on("line", (input) => {
  if (lc === 0) {
    [N, R, Q] = input.split(" ").map(Number);
    treeData = Array.from({ length: N + 1 }, () => []);
  } else if (lc < N) {
    let [U, V] = input.split(" ").map(Number);
    treeData[U].push(V);
    treeData[V].push(U);
  } else {
    queries.push(Number(input));
    if (queries.length === Q) rl.close();
  }
  lc++;
});

class Tree {
  constructor() {
    this.parent = -1;
    this.child = [];
  }
}

rl.on("close", () => {
  let dp = Array.from({ length: N + 1 }, () => new Tree());
  let size = new Array(N + 1).fill(0);

  makeTree(R, -1);
  countSubtreeNodes(R);

  for (let q of queries) {
    console.log(size[q]);
  }

  function makeTree(curNode, parent) {
    for (let node of treeData[curNode]) {
      if (node != parent) {
        dp[curNode].child.push(node);
        dp[node].parent = curNode;
        makeTree(node, curNode);
      }
    }
  }

  function countSubtreeNodes(curNode) {
    size[curNode] = 1;
    for (let node of dp[curNode].child) {
      countSubtreeNodes(node);
      size[curNode] += size[node];
    }
  }
});
