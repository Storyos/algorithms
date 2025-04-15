function solution(rows, columns, queries) {
    var answer = [];
    const arr = [...Array(rows)].map((v, r)=>[...Array(columns)].map((v, c)=>(r * columns) + (c + 1)));
    const arr2 = [...Array(rows)].map((v, r)=>[...Array(columns)].map((v, c)=>(r * columns) + (c + 1)));
    
    
    for(var q of queries){
        answer.push(rotate(q));
    }
    
    return answer;
    
    function rotate(query){
        var [lty,ltx,rby,rbx] = query;
        var min = 100001;
        var lbtmp = arr[rby-1][ltx-1];
        var toptmp = arr[lty-1][rbx-1];
        var rbtmp = arr[rby-1][rbx-1];
        min = Math.min(lbtmp,toptmp,rbtmp,min);
        for(var i=rbx-1; i>=ltx; i--){
            arr[lty-1][i]=arr[lty-1][i-1];
            min = Math.min(arr[lty-1][i-1],min);
        }
        
        for(var i=rby-1; i>lty; i--){
          arr[i][rbx-1]=arr[i-1][rbx-1]; 
            min = Math.min(arr[i-1][rbx-1],min);
        }
        arr[lty][rbx-1]=toptmp;
        
        for(var i=ltx; i<=rbx-1; i++){
            arr[rby-1][i-1]=arr[rby-1][i];
            min = Math.min(arr[rby-1][i],min);
        }
        arr[rby-1][rbx-2]=rbtmp;
        
        for(var i=lty-1; i<rby-1; i++){
            arr[i][ltx-1]=arr[i+1][ltx-1];
            min = Math.min(arr[i+1][ltx-1],min);
        }
        arr[rby-2][ltx-1]=lbtmp;
        return min;
    }
    
}