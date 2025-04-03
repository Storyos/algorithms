function solution(orders, course) {
    var answer = [];
    
//     1. 주문들 사전순으로 정렬
    for(let i=0; i<orders.length; i++){
        orders[i]=orders[i].split("").sort().join("");
    }
    
//     2. 주문리스트들을 코스메뉴 개수별로 배열로 저장
    const menuMap = Array.from({ length: 11 }, () => new Map());
    let maxArr = new Array(11).fill(0);
    
//     size별로 뽑는것을 저장
    for(let i=0; i<orders.length; i++){
        for(var size of course){
            let arr = [];
            combination( i,0,arr,0,size);
        }    
    }
    
    for(let i=2; i<=10; i++){
        let mc = maxArr[i];
        if(mc>=2){
            for(var menu of menuMap[i]){
                if(menu[1]===mc){
                    answer.push(menu[0]);
                }
            }
        }
    }
    answer.sort();
    return answer;
    
    function combination(oc,start, arr, count, r){
        if(count===r){
            let menu = arr.join("");
            if(menuMap[r].has(menu)){
                var cnt = menuMap[r].get(menu);
                menuMap[r].set(menu,cnt+1);
                maxArr[r]=Math.max(maxArr[r],cnt+1);
            }else{
                menuMap[r].set(menu,1);
            }
        }else{
            for(let i=start; i<orders[oc].length; i++){
                arr.push(orders[oc][i]);
                combination(oc,i+1,arr,count+1,r);
                arr.pop();
            }
        }
    }
}