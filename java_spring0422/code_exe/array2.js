//1차원 배열 요소(element)
//무조건 index 0부터 시작한다

var array = [1,2,3,4,5,6];

console.log('길이는: ' + array.length);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


console.log('===================');

//2~10까지 입력받고 출력, 원소만들고 하기
var array1 = [];
var sum = 0;

var init = 1;
for (let i = 0; i < 9; i++) {
    array1[i] = ++init;
    sum = sum + array1[i];
    console.log(array1[i]);
}

console.log('2~10 합은 ' + sum);




console.log('===================');

//1~10 합 구하기. 짝수 합. 홀수 합

var oddsum = 0;
var evensum = 0;

var array4 = [];

var init = 0;
for (let i = 0; i < 10; i++) {
    array4[i] = ++init;
    if(array4[i]%2==0){
        evensum = evensum + array4[i];
    }else if(array4[i]%2==1) {
        oddsum = oddsum + array4[i];
    }
    
}
console.log('짝수의 합은 '+ evensum);
console.log('홀수의 합은 '+ oddsum);