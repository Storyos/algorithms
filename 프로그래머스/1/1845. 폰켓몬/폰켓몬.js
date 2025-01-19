function solution(nums) {
//     N마리의 포켓몬 중 N/2 마리를 가져갈 수 있다.
    var tmp = new Set();
    for(var num of nums){
        tmp.add(num);
    }
    return tmp.size>=nums.length/2?nums.length/2:tmp.size;
}