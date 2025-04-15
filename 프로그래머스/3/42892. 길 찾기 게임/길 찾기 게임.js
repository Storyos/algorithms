// X값을 기준으로 트리생성
class BST{
    constructor(value,index){
        this.value = value;
        this.index = index;
        this.leftChild = null;
        this.rightChild = null;
    }
    insert(value,index){
//         왼쪽 child로 
        if(this.value>value){
            if(this.leftChild===null){
                this.leftChild = new BST(value,index);
            }else{
                this.leftChild.insert(value,index);
            }
        }
        else if(this.value<value){
            if(this.rightChild===null){
                this.rightChild = new BST(value,index);
            }else{
                this.rightChild.insert(value,index);
            }
        }
    }
    preorder(callback) {
	callback(this.index);
    if (this.leftChild) {
      this.leftChild.preorder(callback);
    };
    if (this.rightChild) {
      this.rightChild.preorder(callback);
    };
  }

	// 후위 순회
  postorder(callback) {
    if (this.leftChild) {
      this.leftChild.postorder(callback);
    };
    if (this.rightChild) {
      this.rightChild.postorder(callback);
    };
    callback(this.index);
  }
}
function solution(nodeinfo) {
    var answer = [];
    nodeinfo.map((a,idx)=>a.push(idx+1));
    nodeinfo.sort((a,b)=>{
        if(a[1]===b[1]) return a[0]-b[0];
        return b[1]-a[1];
    })
    var tree = new BST(nodeinfo[0][0],nodeinfo[0][2]);
    for(var [value,level,index] of nodeinfo){
        tree.insert(value,index);
    }
    var pre = [];
    tree.preorder((value) => pre.push(value));
    answer.push(pre);
    var post = [];
    tree.postorder((value)=> post.push(value));
    answer.push(post);
    return answer;
}