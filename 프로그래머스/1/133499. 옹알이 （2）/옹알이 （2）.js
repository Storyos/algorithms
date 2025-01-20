var a = ['aya','ye','woo','ma'];
var result=0;
function matching(bab,last){
    
    if(bab.length<=0){
        result++;
        return true;
    }else{
        for(let i=0; i<a.length; i++){
            if(bab.substring(0,a[i].length)==a[i] && i!=last){
                matching(bab.slice(a[i].length,bab.length),i);    
            }
        }
    }
}

function solution(babbling) {
    var a = ['aya','ye','woo','ma'];
    var last ='';
//     babling하나당 없어질때까지??
    for(let i=0; i<babbling.length; i++){
    matching(babbling[i],-1);   
    }
    return result;
}