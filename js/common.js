console.log("init===============");


/*function oneArray() {

    //3~9 입력 출력, 합 1 차원 배열
    let array = [];
    let init = 3;
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        array[i] = init++;
        sum = sum + array[i];
    }
    console.log("3~9까지의 합은 " + sum);

}

console.log(oneArray());

*/
console.log("================");

// 2차원 배열 1~20 5단위로 짝수의 합 홀수의 합
//1~5,6~10,11~15,16~20 4행 5열

function twoArray2() {
    let array = [];
    let evensum = 0;
    let oddsum = 0;
    let sum = 0;
    let init = 1

    for (let i = 0; i < 4; i++) {
        array[i] = [];
        for (let j = 0; j < 5; j++) {
            array[i][j] = init++;
            if (array[i][j] % 2 == 0) {
                evensum = evensum + array[i][j];
            } else if (array[i][j] % 2 == 1) {
                oddsum = oddsum + array[i][j];
            }
        }
    }
    sum = evensum + oddsum;
    console.log("1~15까지의 짝수의 합: " + evensum);
    console.log("1~15까지의 홀수의 합: " + oddsum);
    console.log("1~15까지의 총합: " + sum);
}

console.log(twoArray2());





function twoArray() {

    let array = [];
    let init = 1

    //1~10 2행 5열까지 입력하고 출력
    for (let i = 0; i < 2; i++) {
        array[i] = [];
        for (let j = 0; j < 5; j++) {
            array[i][j] = init++;

        }

    }

    console.log(array);

}

console.log(twoArray());



