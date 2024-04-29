function Map1() {
    let array = [1, 2, 3, 4, 5];

    // let print = array.map(function (element) { return element });
    //해당 element가 배열로 만들어져서 다시 print에 저장됨

    let print2 = array.map((element) => element);
    //위와 같은 map을 화살표 함수로 나타냈다.
    console.log(print2);
    //print로 출력하게 되면 배열로 나타내지며 array와 똑같이 출력이 됨
}

// console.log(Map1());



function Map2() {
    //합구하라
    let array = [1, 2, 3, 4, 5];
    let sum = 0;

    array.map(function (element) {

        sum += element;

    });
    //해당 element가 배열로 만들어져서 다시 print에 저장됨

    // let print2 = array.map((element) => element);
    //위와 같은 map을 화살표 함수로 나타냈다.
    return sum;
    //print로 출력하게 되면 배열로 나타내지며 array와 똑같이 출력이 됨
}

// console.log(Map2());


function twoArray4() {
    let array = [];
    let init = 1;
    let sum = 0;
    let choiceArray = [3, 7, 9, 11, 13, 15, 17];

    //array랑 choiceArray랑 비교해서 같으면 통과 다르면 더하기
    ///1~10, 11~20, 맞으면 제외하고 합 구하라
    //1,2,4,5,6,8,10,12,14,16
    //7+11+13+17=>48
    for (let i = 0; i < 2; i++) {
        array[i] = [];
        for (let j = 0; j < 10; j++) {
            array[i][j] = init++;

        }
    }


    // [3, 7, 9, 11, 13, 15, 17];
//1,2,4,5,8,10,14,16 = 60
for (const row of array) {
    for (const col of row) {
        //col이 array의 값을 한개씩 가지고 오는 거임
        choiceArray.forEach(element => {
            if (element==col) {
                console.log(col);
            }
        })
    }
    
}


    return sum;

}


console.log(twoArray4());
// && col%3==0