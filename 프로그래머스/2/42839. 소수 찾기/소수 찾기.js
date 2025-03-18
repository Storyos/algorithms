function solution(numbers) {
    var answer = 0;
    let maxNum =parseInt(numbers.split('').sort((a,b)=>b-a).join(''));
    let arr = getC(maxNum);
    let numbs = new Set();
    let tmp = [];
    let visited = new Array(numbers.length).fill(false);
    for(let r = 1; r<=numbers.length; r++){
    permutation(tmp,r,0,visited);        
    }
    for(let n of numbs){
        if(arr[n]){
            answer++;
        }
    }
    
    return answer;
    
function permutation(arr,r,count,visited){
    if(count===r){
        numbs.add(parseInt(arr.join('')));
    }else{
     for(let i=0; i<numbers.length; i++){
         if(!visited[i]){
         arr.push(numbers[i]);
         visited[i]=true;
         permutation(arr,r,count+1,visited);
         arr.pop();
         visited[i]=false;
         }
     }   
    }
}
}

function getC(num){
    
    let prime = new Array(num+1).fill(true);
    prime[0]=false;
    prime[1]=false;
    for(let i=2; i<=Math.sqrt(num); i++){
        for(let j=i*i; j<=num; j+=i){
            prime[j]=false;
        }
    }
    return prime;
}
