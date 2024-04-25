function oneArray() {

    let array = [1, 2, 3, 4, 5];
    let sum = 0;


    array.forEach(number => {
        if (number % 2 == 0)
            console.log('짝수 출력'+number);
    });
        

    console.log('=================');
    array.forEach(function (element) {
        sum = sum + element;
    });
    console.log('합은 ' + sum);
}
console.log(oneArray());


console.log('=================');

function oneArray2() {
    let array = [1, 2, 3, 4, 5];

    for (const arrays of array) {
        console.log(arrays);
    }

}
console.log(oneArray2());

function oneArray4() {

    let array = [];
    let sum = 0;

    //1~10 sum
    for (let i = 0; i < 10; i++) {
        array.push(i+1);
        sum+=array[i]
        console.log(array[i]);
    }
    console.log('합은 '+sum);

    for (let i in array) {
        if(i%2==0)
        console.log(array[i]);
    }//배열에서 인덱스를 다룰 수 있는 for문: 그냥 for문, forin문

    
}
console.log(oneArray4());

console.log('============');



function Map2() {
    let array = [];

    for (let i = 0; i < 10; i++) {
        array[i] = i+1;
    }
    // array.map(function (item) {
    //     if((item%3)!=0) console.log(item);
    // });
    array.map((item) => {
        if((item%3)!=0) console.log(item);
    });
    //이렇게도 적을 수 있다.
}
console.log(Map2());



