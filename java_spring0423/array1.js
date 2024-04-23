console.log('it에 오신 것을 환영합니다.');

function oneArray1() {

    let array = [1, 2, 3, 4];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}

console.log(oneArray1());

console.log('=====================');

//값을 입력하고 출력한다.

function oneArray2() {
    let array = [];
    let init = 0;

    for (let i = 0; i < 4; i++) {
        array[i] = ++init;
        console.log(array[i]);
    }
    
}
console.log(oneArray2());

console.log('====================');

function undefined() {
    //return : 던지겠다(어떤타입을(문자형,정수형, 부울린형))
    console.log('print.............');
    return "function 기본적으로 return으로 던져야 한다."
}

//f3하면 해당 함수로 점프 가능
//마우스 누르고 ctrl하면 점프 가능
//ctrl+ o: 현재 페이지 모든 함수나 변수 보여준다(공통)
console.log(undefined());

console.log('====================');

//1~10 합을 구하시오 return sum
function oneArray3() {
    let array = [];
    let init = 0;
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        array[i] = ++init;
        sum = sum + array[i];
    }
    return sum;
    
}

console.log(oneArray3());