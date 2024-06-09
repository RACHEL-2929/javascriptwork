var undef;

console.log(undef); //undefined
console.log(typeof undef); //undefined
// 기본형 자료형에서 쓰는 것으로 변수를 선언하고 초기화 하지 않을 때

var nullVal = "something";
console.log(nullVal); //something
nullVal = null;
console.log(nullVal); //null
console.log(typeof nullVal); //object
// null이 들어가있다는 건 자동적으로 참조형 자료형으로 되어있다는 것을 알 수 있음
