const lNum = [1,4,7,-1];
const rNum = [3,6,9,-2];
const mNum = [2,5,8,0];
var lhM= false;
var rhM = false;
var lp = rp =3 ;
function moving(num, hand){
    for(let i=0; i<4; i++){
        if(num==lNum[i]){
            lp=i;
            lhM=false;
            return "L";
        }else if(num ==rNum[i]){
            rp=i;
            rhM= false;
            return "R";
        }
        else{
            if(num==mNum[i]){
//                 이제 체크

                var lDistance = lhM?Math.abs(i-lp):Math.abs(i-lp)+1;
                var rDistance = rhM?Math.abs(i-rp):Math.abs(i-rp)+1;

                if(lDistance < rDistance){
                    lp=i;
                    lhM = true;
                    return "L";
                }else if( lDistance > rDistance){
                    rp=i;
                    rhM = true;
                    return "R";
                }else{
                    if(hand=="left"){
                        lp = i;
                        lhM = true;
                        return "L";
                    } else{
                        rp=i;
                        rhM = true;
                        return "R";
                    }
                }    
            }
        }
    }
    

    
}
function solution(numbers, hand) {
    var answer = '';
    for(let i=0; i<numbers.length; i++){
        answer+=moving(numbers[i],hand);
    }
    return answer;
}