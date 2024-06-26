var string;
// 작은 따옴표로도 가능
string = "Javascript";

console.log(string); //Javascript
console.log(typeof string); //string

// 큰 따옴표로도 가능
string = "JavaScript";

console.log(string); //Javascript
console.log(typeof string); //string

// 개행을 하고 싶다면 \n을 넣어야 한다
var multiline = "안녕하세요\n반갑습니다";

console.log(multiline);

// 백틱은 es6 버전에서 나온 것으로 멀티라인 문자열, 표현식 삽입 등의
// 편리한 문자열 기능 제공하는 표기법
multiline = `안녕하세요
반갑습니다`;

console.log(multiline);

var lastName = "홍";
var firstName = "길동";

console.log("제 이름은 " + lastName + firstName + "입니다.");
// 제 이름은 홍길동입니다.
console.log(`제 이름은 ${lastName}${firstName}입니다.`);
// 제 이름은 홍길동입니다.
// 백틱을 사용하면 문자열 안에서도 ${}을 사용하면 변수를 출력가능하다
