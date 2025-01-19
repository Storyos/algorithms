function solution(a, b) {
    var answer = '';
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    const month = [0,31,29,31,30,31,30,31,31,30,31,30];
    var date =[0];
    for(let i=1; i<month.length; i++) {
        date.push(date[i-1]+month[i]);
    }
    return day[(date[a-1]+b-1)%7];
}