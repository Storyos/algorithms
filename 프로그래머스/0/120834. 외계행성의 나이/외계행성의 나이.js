function solution(age) {
    
    let dict = {0:'a',1:'b',2:'c',3:'d',4:'e',5:'f',6:'g',7:'h',8:'i',9:'j'};
    let tmp = age.toString().split('').map((a)=>dict[a]);
    var answer = tmp.join('');
    return answer;
}