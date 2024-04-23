// 1,2,3,4,5,6
// 7,8,9,10,11,12
//3,7,10을 뺀 짝수,홀수의 합, 총합 구하기
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
            if (array[i][j] != 3 && array[i][j] != 7 && array[i][j] != 10) {
                if (array[i][j] % 2 == 0) {
                    evensum = evensum + array[i][j];
                }
                else if (array[i][j] % 2 == 1) {
                    oddsum = oddsum + array[i][j];
                }
                console.log(array[i][j]);
            }
            sum = evensum + oddsum;
        }
    }

    console.log('짝수의 합은 ' + evensum);
    console.log('홀수의 합은 ' + oddsum);
    console.log('총합은 ' + sum);

}

console.log(twoArray5());

console.log('=====================');
