function solution(wallpaper) {
    var answer = [];
    var lux =luy = 50;
    var rdx =  rdy = -1;
    
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[0].length; j++) {
            if(wallpaper[i][j]==="#"){
                if(lux>i)lux = i;
                if(luy>j)luy=j;
                if(rdx<i)rdx=i;
                if(rdy<j)rdy=j;
            }
        }
    }
    return [lux,luy,rdx+1,rdy+1];
}