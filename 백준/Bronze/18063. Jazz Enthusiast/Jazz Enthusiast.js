const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

var lc = 0;
var [n,time] = [0,0];
var timeArr =[];

rl.on('line', (input)=>{
    if(lc===0){
        [n,time]=input.split(" ").map(Number);
    }else {
        timeArr.push(input);
    }
    lc++;
    if(lc>n){
        rl.close();
    }
})

rl.on('close',()=>{
    var [hour,min,sec] = [0,0,0];

    for(var t of timeArr){
        var [tm,ts] = t.split(":").map(Number);
        sec+=ts;
        if(sec>=60){
            min++;
            sec%=60;
        }
        min+=tm;
        if(min>=60){
            hour++;
            min%=60;
        }
    }

    for(var i=0; i<timeArr.length-1; i++){
        sec-=time;
        if(sec<0){
            sec+=60;
            min--;
        }
        if(min<0){
            min+=60;
            hour--;
        }
    }
    if(hour<10){
        hour="0"+hour;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    console.log(`${hour}:${min}:${sec}`)
})