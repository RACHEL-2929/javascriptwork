// 함수: 내이름
// 2~11 배열 만들거나 (입력하거나) 합을 구하고 return 출력
function choisoyeon() {
    let array = [];
    let init = 1;
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        array[i] = ++init;
        sum = sum + array[i];
        console.log(array[i]);
    }
    return sum;
}
console.log('2~11까지의 합은 '+ choisoyeon());

console.log(oneArray3());