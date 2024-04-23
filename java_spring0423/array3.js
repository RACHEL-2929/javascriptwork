function twoArray1() {
    //2차원 배열은 [][]

    //행열
    //행: 가로
    //열: 세로

    let array = [
        [1, 2, 3] //0행
        , [4, 5, 6] //1행
        , [7, 8, 9] //2행
    ];


    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(array[i][j]);
        }

    }
}

console.log(twoArray1());

console.log('======================');

//1행 1,2,3 2행 4,5,6 2차원 배열로
//1~6까지의 합 구하기
function twoArray2() {
    let array = [[1, 2, 3], [4, 5, 6]];
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        console.log(i + '행 시작');
        for (let j = 0; j < 3; j++) {
            console.log(array[i][j]);
            sum = sum + array[i][j];
        }
        console.log(i + '행 끝');

    }
    return sum;
}

console.log(twoArray2());

console.log('======================');


//var은 es5에서 쓰이는 것으로 중복으로 사용 가능 같은 이름 가능 덮어쓰기 느낌
//let은 es6에서 쓰이는 것으로 중복으로 사용 불가능 같은 이름 불가능
//자바와 틀린 2차원 배열 선언
//***************************************************** */
function twoArray3() {
    // 1~6까지 입력받고 출력
    var array = [];
    var init = 0;

    for (var i = 0; i < 2; i++) {

        array[i] = [];//1차원배열에 해당하는 또다른 배열에 뭐가 들어갈지 모르니 비워둠

        for (var j = 0; j < 3; j++) {
            array[i][j] = ++init;
        }
    }
    console.log(array);//array로 출력하면 입력된 값이 다 출력
}

console.log(twoArray3());
/********************************************************* */


console.log('======================');


// 1~15 까지 3행 5열로 2차원 배열 입력하고 출력, 총합 구하기

function twoArray4() {
    var array = [];
    var init = 1;
    var evensum = 0;
    var oddsum = 0;
    var sum = 0;

    for (let i = 0; i < 3; i++) {
        array[i] = [];
        for (let j = 0; j < 5; j++) {
            array[i][j] = init++;
            if(array[i][j]%2==0) {
                evensum = evensum + array[i][j];
            }
            else if(array[i][j]%2==1) {
                oddsum = oddsum + array[i][j];
            }
            sum = evensum+ oddsum;
        }
    }

    console.log('짝수의 합은 ' + evensum);
    console.log('홀수의 합은 '+ oddsum);
    console.log('총합은 '+ sum);

}

console.log(twoArray4());

console.log('=====================');


// 1,2,3,4,5,6
// 7,8,9,10,11,12
// 짝수의 합 홀수의 합 구해서 총합까지 출력하기
function twoArray5() {
    var array = [];
    var init = 1;
    var evensum = 0;
    var oddsum = 0;
    var sum = 0;

    for (let i = 0; i < 2; i++) {
        array[i] = [];
        for (let j = 0; j < 6; j++) {
            array[i][j] = init++;
            if(array[i][j]%2==0) {
                evensum = evensum + array[i][j];
            }
            else if(array[i][j]%2==1) {
                oddsum = oddsum + array[i][j];
            }
            sum = evensum+ oddsum;
        }
    }

    console.log('짝수의 합은 ' + evensum);
    console.log('홀수의 합은 '+ oddsum);
    console.log('총합은 '+ sum);

}

console.log(twoArray5());

console.log('=====================');
