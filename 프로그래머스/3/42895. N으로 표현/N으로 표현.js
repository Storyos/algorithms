function solution(N, number) {
    var arr = Array.from(new Array(9), () => new Set());
    for(let i=1; i<=8; i++){
        var tmp = N.toString();
        tmp = tmp.repeat(i);
        arr[i].add(parseInt(tmp));
    }
    for(let i=1; i<=8; i++){
        for(let j=1; j<=i; j++){
            for(var a of arr[j]) {
                    for(var b of arr[i-j]) {
                        arr[i].add(a+b);
                        arr[i].add(a-b);
                        arr[i].add(a*b);
                        arr[i].add(Math.floor(a/b));
                    }
                } 
        }
        if(arr[i].has(number)) return i;
    }
    // for(let i=0; i<=5; i++){
    //     console.log("I번 해서 만드는거 ",i, arr[i]);
    // }
    return -1;
}