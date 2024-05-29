var string;
string = "Javascript";

console.log(string); //Javascript
console.log(typeof string); //string

string = "JavaScript";

console.log(string);
console.log(typeof string);

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

console.log(`제 이름은 ${lastName}${firstName}입니다.`);
