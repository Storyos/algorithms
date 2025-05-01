
function solution(relation) {
    var answer = 0;
    let bucket = [];
    let visited =[];
    let dup = [];
    for(let i=1; i<=relation[0].length; i++){
        let arr =[];
        combination(arr,0,0,i);
    }
    bucket.sort((a,b)=>a.length-b.length);    
    for(let b of bucket){
        let tmp = b.join("");
        let valid = true;
        for(let d of dup){
            let chance = d.length;
            for(let i=0; i<d.length; i++){
                if(tmp.includes(d[i])){
                    chance--;
                }
                if(chance===0){
                    valid = false;
                    break;
                }
            }
        }
        if(valid) {
                answer++;
                dup.push(b)
        };
    }
    
    
    
    return answer;
    
    function combination(arr,start,count,r){
        if(count===r){
            let tmpSet = new Set();
            for(let r of relation){
            let tmp = "";
            for(let n of arr){
                tmp+=r[n];
                }
                tmpSet.add(tmp);
            }
            if(tmpSet.size===relation.length){
                bucket.push([...arr]);
            }

            return;
        }else{
            for(let i=start; i<relation[0].length; i++){
                arr.push(i);
                combination(arr,i+1,count+1,r);
                arr.pop(i);
            }
        }
    }
}