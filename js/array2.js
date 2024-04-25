function Filter() {
    let array = [1,2,3,4,5];

    let newArray = array.filter(function (item) {
        //조건에 만족하는 것만 새로운 배열로 만든다
        return item%2==0;
    });
    console.log(newArray);
}
console.log(Filter());