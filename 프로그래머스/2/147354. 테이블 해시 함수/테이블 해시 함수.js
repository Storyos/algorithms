function solution(data, col, row_begin, row_end) {
    var answer = 0;
    data.sort((a,b)=>{
        if(a[col-1]===b[col-1]){
            return b[0]-a[0];
        }else{
            return a[col-1]-b[col-1];
        }
    })
    var sarr = [];
    for(var i=row_begin-1; i<row_end; i++){
        var tmp = 0;
        for(var n of data[i]){
            tmp= tmp + n%(i+1);
        }
        sarr.push(tmp.toString(2));
    }
    sarr.sort((a,b)=>b.length-a.length);
    var digit = sarr[0].length;
    fill();
    var counter = new Array(sarr[0].length).fill(0);
    
    for(var s of sarr){
        for(var i=0; i<s.length; i++){
            counter[i]+=Number(s[i]);
        }
    }
    var ans = "";
    for(var c of counter){
        ans=c%2===1?ans+"1":ans+"0";
    }
    return parseInt(ans,2);
    
    function fill(){
        for(var i = 0; i<sarr.length; i++){
         var str = "0".repeat(digit-sarr[i].length);
         sarr[i]=str+sarr[i];
        }
    }
    return answer;
}