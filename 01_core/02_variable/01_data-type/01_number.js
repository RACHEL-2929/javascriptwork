var integer = 10;

console.log(integer); //10
console.log(typeof integer); //number

var double = 5.5;

console.log(double); //5.5
console.log(typeof double); //number

var negative = -10;

console.log(negative); //-10
console.log(typeof negative); //number

// 타입과 같이 일치하면 true 아니면 false 출력됨
console.log(10 === -10); //false
console.log(10 === 10.0); //true

// 모든 연산은 실수로 연산이 되고 있어서 실제로는 10.0/4.0 의 연산과 같다
console.log(10 / 4); //2.5

console.log(10 / 0); //Infinity
console.log(typeof 10 / 0); //number

console.log(10 / -0); //-Infinity
console.log(typeof 10 / -0); //number

console.log(1 * "문자열"); //NaN => Not a Number 숫자로 표현될 수 없는 형태
console.log(typeof 1 * "문자열"); //number => Nan 도 number 타입이다
