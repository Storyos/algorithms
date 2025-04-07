function solution(num_list) {
    return num_list.sort((a,b)=>a-b).filter((a,index)=>index>=5);
}