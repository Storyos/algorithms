function solution(n) {
    var answer = '';
    let num = 1;
    let arr =[];
    arr.push(num);
    while(num<=n){
     num=(num*3)+1;
    arr.push(num);
    }
    arr.pop();
    let tmp = [];
    for(let i=arr.length-1; i>=0; i--){
        tmp.push(Math.floor(n/arr[i]));
        n%=arr[i];
    }
    tmp = tmp.reverse();
    let tmpa = new Array(tmp.length).fill(0);
    for(let i=0; i<tmp.length; i++){
        let a = tmp[i].toString().repeat(i+1).split('');
        for(let j=0; j<a.length; j++){
            tmpa[j]+=parseInt(a[j]);
        }
    }
    let tmp2 = tmpa
    tmp2.push(0);
    const pattern = ["1","2","4"];
    for(let i=0; i<tmp2.length-1; i++){
        if(tmp2[i]>3){
            tmp2[i+1]+=Math.floor((tmp2[i]-1)/3);
        }
        answer+=pattern[(tmp2[i]-1)%3];
    }
    let last = tmp2.pop();
    if(last>0){
        answer+=pattern[(last-1)%3];
    }
    return answer.split("").reverse().join("");
}
