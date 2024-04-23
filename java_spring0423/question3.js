//2차원 배열 1~9까지 입력하고 출력하시오.

function question3() {
    var array = [];
    var evensum = 0;
    var oddsum = 0;
    var sum = 0;
    var init = 0;

    for (let i = 0; i < 3; i++) {
        array[i] = [];
        for (let j = 0; j < 3; j++) {
            array[i][j] = ++init;
            if (array[i][j] % 2 == 0) {
                evensum = evensum + array[i][j];
            }
            else if (array[i][j] % 2 == 1) {
                oddsum = oddsum + array[i][j];
            }
        }

    }
    sum = evensum + oddsum;
    console.log(array);
    console.log('짝수의 합 : ' + evensum);
    console.log('홀수의 합 : ' + oddsum);
    console.log('총합 : ' + sum);
}

console.log(question3());



console.log('======================');


function question4() {
    var array = [];
    var evensum = 0;
    var oddsum = 0;
    var sum = 0;
    var init = 0;

    for (let i = 0; i < 3; i++) {
        array[i] = [];
        for (let j = 0; j < 3; j++) {
            array[i][j] = ++init;
            if(array[i][j]==3||array[i][j]==7||array[i][j]==10) {
                if (array[i][j] % 2 == 0) {
                    evensum = evensum + array[i][j];
                }
                else if (array[i][j] % 2 == 1) {
                    oddsum = oddsum + array[i][j];
                }
            }
            
        }

    }
    sum = evensum + oddsum;
    console.log(array);
    console.log('짝수의 합 : ' + evensum);
    console.log('홀수의 합 : ' + oddsum);
    console.log('총합 : ' + sum);
}

console.log(question4());