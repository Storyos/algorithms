function solution(s) {
    var tmp = s.split(" ");
    var tmp2= [];
    for(let i=0; i<tmp.length; i++) {
        var s ='';
        for(let j=0; j<tmp[i].length; j++) {
            s += j%2==0?tmp[i].charAt(j).toUpperCase():tmp[i].charAt(j).toLowerCase();
        }
        tmp2.push(s);
    }
    
    return tmp2.join(' ');
}