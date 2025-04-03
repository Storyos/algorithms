// '('')'의 개수가 같다면 균형잡힌 괄호 문자열

function solution(p) {
    var answer = '';
    var target = p.split("").join("");
    return makingCorrect(target);
    function makingCorrect(target){
        // console.log("--------");
        if(target===""){
            return "";
        }
        var [left,right] = dividetoBalanced(target);
        // console.log("왼쪽",left, "오른쪽",right);

//         올바른 문자열 일 경우
        if(checkCorrect(left)){
            // console.log("올바른 문자열임",left);
            let last = makingCorrect(right);
            return left+last;
        } else {
            // console.log("올바른 문자열이 아님");
            var tmp = "(";
            tmp += makingCorrect(right);
            tmp += ")";
            left = reverse(left.substr(1,left.length-2));
            
            return tmp+left;
        }
    }
    function reverse(s){
        let tmp = ""
        for(let i=0; i<s.length; i++){
            if(s[i]==="("){
                tmp+=")";
            }else{
                tmp+="(";
            }
        }
        return tmp;
    }
    function dividetoBalanced(s){
        for(let cut =2; cut<=s.length; cut++){
            var left = s.substr(0,cut);
            if(checkBalanced(left)){
                return [left,s.substr(cut)];
            }
        }
        return [s,""]
    }

    function checkBalanced(s){
        var [left,right] = [0,0];
        for(var c of s){
            if(c===")") right++;
            else left++;
        }
        return left===right?true:false;
    }
    
    function checkCorrect(s){
        var queue = [];
        for(let i=0; i<s.length; i++){
            if(s[i]==="("){
                queue.push(s[i]);
            }else{
                if(queue.length<1){
                    return false;
                }else queue.pop();
            }
        }
        return true;
    }
    return answer;
}