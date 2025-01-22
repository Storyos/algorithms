function solution(phone_book) {
    var phoneSet= new Set();
    for(var num of phone_book){
        phoneSet.add(num);
    }
    for(let i=0; i<phone_book.length; i++){
        for(let j=1; j<phone_book[i].length; j++){
            if(phoneSet.has(phone_book[i].substring(0,j)))
                return false;
        }   
    }
    return true;
}