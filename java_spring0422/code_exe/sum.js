//20240422 일일과제
//1~10 합을 출력
//1~10 입력하고 합을 출력
function Sum() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        sum = sum + array[i];
    }
    console.log('1~10까지의 합은 ' + sum);

    sum = 0;
    var array1 = [];

    var init = 0;
    for (var i = 0; i < 10; i++) {
        array1[i] = ++init;
        sum = sum + array1[i];
        console.log(array1[i]);
    }
    console.log('1~10까지 입력 받고 합은 ' + sum);
}


console.log(Sum());

console.log('======================');