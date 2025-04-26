function solution(s) {
    let min = s.length;
    for(let i=1; i<s.length; i++){
        min = Math.min(min,compressing(i));
    }
    return min;
    
    
    function compressing(unit){
        let tmp = "";
        let isValid = false;
        let count =1;
        let i; 
        for(i=0; i<=s.length-unit; i+=unit){
            // 다음꺼랑 같으면(즉 압축가능하면)
            if(s.substr(i,unit)===s.substr(i+unit,unit)){
                isValid= true;
                count++;
            }else{
                if(isValid){
                    isValid=false;
                    tmp+=count
                    count=1;
                }
                tmp+=s.substr(i,unit);
            }
        }
        tmp+=s.substr(i);
        return tmp.length;
    }
}
// 문자열을 몇 개 단위로 잘라 압축할지 정하는 것
