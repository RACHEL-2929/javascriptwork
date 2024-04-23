//카페에는 twoArray3로 올렸음
//1~12 짝수의 합 홀수의 합 총합
function twoArray3() {
    let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
    let evensum = 0;
    let oddsum = 0;
    let sum = 0;

    //행의 개수: array.length
    //열의 개수: array[i].length
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 == 0) {
                evensum = evensum + array[i][j];
            } else if (array[i][j] % 2 == 1) {
                oddsum = oddsum + array[i][j];
            }
        }
    }
    sum = evensum + oddsum;

    console.log('짝수의 합 : ' + evensum);
    console.log('홀수의 합 : ' + oddsum);
    console.log('총합 : ' + sum);
}

console.log(twoArray3());

