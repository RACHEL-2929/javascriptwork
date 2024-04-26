function Switch1() {
    var choice = 1;

    switch (choice) {
        case 1: console.log(1); break;
        case 2: console.log(2); 
        case 3: console.log(3); 
    
        default: console.log('찾는 값이 없습니다.');
    }
    
}

console.log('출력');
// console.log(Switch1());
// Switch1();
//clg로 함수를 호출하면 해당 영역에서는 출력되는 것이 없기 때문에 undefined가 나온다



function While1() {

    //1~10
    let init = 0;
    let sum = 0;
    while (++init<=10) {
        console.log(init);
        sum+=init;
    }
    return sum;
}

// console.log(While1());

function DoWhile() {
    //1~10
    let init = 1;
    let sum = 0;
    do {
        console.log(init);
        sum+=init;
    } while (++init<=10);    
    return sum;
}

console.log(DoWhile());

// 3~11 for, while,dowhile 출력
// 일반과제

function Ex1() {

    for (let i = 3; i <12; i++) {
        console.log(i);
        
    }
}
// console.log(Ex1());


function Ex2() {
    let init = 2
    while (init++ < 11) {
        console.log(init);
    }
    
}
// console.log(Ex2());

function Ex3() {
    let init = 3
    do {
        console.log(init);
    } while (++init<12);
    
}

// console.log(Ex3());