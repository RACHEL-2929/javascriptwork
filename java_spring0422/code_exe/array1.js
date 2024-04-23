//ctrl+alt+n 실행
//ctrl+m:옆에 창 없애기
//ctrl+j: 밑에 창 없애기



function arrayLesson1() {
    //clg 콘솔로그 나오는 단축키
    console.log("function 말하다");
}

console.log('말하다');
console.log(arrayLesson1());
//javascript/java
//javascript:문법
//java:문법
//react: es6

//변수 선언
//javascript는 변수선언하면 자동으로 undefined(아무것도 없음)가 나옴

var print;
console.log(print);

console.log('======================');

function oneArray() {
    //자동정렬 ctrl+shift+f
    //모든 언어 공통 : 배열 index 0부터 시작한다
    //값을 얻는 것도 0부터 얻는다
    //모든 객체지향 언어는 같다


    var array = [1, 2, 3, 4, 5];

    for (var i = 0; i < 5; i++) {
        console.log(array[i]);

    }

}

console.log(oneArray());

console.log('=========================');

//for 1~11 1차원 배열로 출력
function j304Ex1() {
    var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    for (var i = 0; i < 11; i++) {
        console.log(array1[i]);
    }
}

console.log(j304Ex1());


console.log('===================');
//2부터 13까지 출력
//1차원 배열은 괄호가 하나 2차원 배열은 괄호가 2개
function oneArray2() {
    var array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    console.log('배열의 길이는 ' + array2.length);

    for (let i = 0; i < array2.length; i++) {
        console.log(array2[i]);
    }
}

console.log(oneArray2());


console.log('======================');

function oneArray3() {

    //입력을 받는데 어느정도 받는지 모른다 그래서 []
    var array = [];

    //1~9
    for (let i = 0; i < 9; i++) {

        array[i] = i + 1;
        console.log(array[i]);
    }
}

console.log(oneArray3());


console.log('======================');

//1~10까지 입력 출력
function oneArray4() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = i + 1;//입력
        console.log(array[i]);//출력
    }
}

console.log(oneArray4());


console.log('======================');

//5~10 입력
function oneArray5() {
    let array = [];

    let init = 4;
    for (let i = 0; i < 6; i++) {
        array[i] = ++init;
        console.log(array[i]);
    }
}

console.log(oneArray5());



console.log('======================');

//3~12 입력
function oneArray6() {
    let array = [];

    let init = 2;
    for (let i = 0; i < 10; i++) {
        array[i] = ++init;
        console.log(array[i]);
    }
}

console.log(oneArray6());

console.log('======================');
