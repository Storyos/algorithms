function solution(m, musicinfos) {
    var answer = '';
    var melodies= [];
    var newM = dealHash(m);
    for(var musicInfo of musicinfos){
        var [start,end,title,mi] = musicInfo.split(",");
        var playtime = calTime(start,end);
        var newMi = dealHash(mi);
        var cMelody = getCompleteMelody(playtime,newMi);
        melodies.push([title,cMelody,playtime]);
    }
    melodies.sort((a,b)=>{
        if(a[2]!=b[2]){
            return b[2]-a[2];
        }
        return 0;
    });
    for(var melody of melodies){
        if(melody[1].includes(newM)){
            return melody[0];
        }
    }
    return "(None)";
    
    function dealHash(melody){
        var dMelody = '';
        for(let i=0; i<melody.length; i++){
            if(melody[i+1]==="#"){
                if(melody[i]==="C"){
                    dMelody+="U";
                }else if(melody[i]==="D"){
                    dMelody+="W";
                }else if(melody[i]==="F"){
                    dMelody+="X";   
                }else if(melody[i]==="G"){
                    dMelody+="Y";
                }else if(melody[i]==="A"){
                    dMelody+="Z";
                }
                i++;
            }
            else{
                dMelody+=melody[i];
            }
        }
        return dMelody;
    }
    
    function calTime(start,end){
        var [sh,sm] = start.split(":").map(Number);
        var [eh,em] = end.split(":").map(Number);
        
        var st = sh*60+sm;
        var et = eh*60+em;
        return et-st;
    }
    
    function getCompleteMelody(playtime,mi){
        var cMelody = '';
        for(let i=0; i<playtime; i++){
            cMelody+=mi[i%mi.length];
        }
        return cMelody;
    }
}