function oneArray3() {
    //0~11출력
    let array = [];
    for (let i = 0; i < 12; i++) {
        array[i] = i;
        console.log(array[i]);
    }


}

// console.log(oneArray3());


// 2차원 배열
function twoArray() {
    //2*3
    let array = [];
    // 1~6
    let init = 1

    // 입력
    for (let i = 0; i < 2; i++) {
        array[i] = [];
        for (let j = 0; j < 3; j++) {
            array[i][j] = init++;
            console.log(array[i][j]);
        }
    }

}

// console.log(twoArray());


// 2차원 배열 1~20 4*5 3,5,6,10,12만 값이 들어오고 3의 배수로 
// 나누어지면 합을 구하여 출력
function twoArray2() {
    let array = [];
    let init = 1;
    let sum = 0;

    for (let i = 0; i <4; i++) {
        array[i] = [];
        for (let j = 0; j < 5; j++) {
            array[i][j] = init++;
            if (array[i][j]===3||array[i][j]===5||array[i][j]===6||array[i][j]===10||array[i][j]===12) {
                if(array[i][j]%3==0){
                    sum+=array[i][j];
                }
            }
        }
        
    }
    console.log('총합은' + sum);
}

console.log(twoArray2());