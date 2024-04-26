//짝수 홀수합
//2~10까지
//for while dowhile

function Ex1() {
    let evensum = 0;
    let oddsum = 0;
    let sum =0;
    for (let i = 2; i < 11; i++) {

        if(i%2==0){
            evensum +=i;
        }
        else if(i%2==1) {
            oddsum+=i;
        }
        sum = evensum+oddsum;
        
    }
    
    console.log('짝수의 합은' + evensum);
    console.log('홀수의 합은' + oddsum);
    console.log('총합은' + sum);
}

// console.log(Ex1());

function Ex2() {
    let evensum = 0;
    let oddsum = 0;
    let sum =0;
    let init = 1;
    while (++init < 11) {
        if(init %2==0){
            evensum +=init;
        }
        else if(init%2==1) {
            oddsum+=init;
        }
        sum = evensum+oddsum;
        
    }

    console.log('짝수의 합은' + evensum);
    console.log('홀수의 합은' + oddsum);
    console.log('총합은' + sum);
    
}

// console.log(Ex2());


function Ex3() {
    let evensum = 0;
    let oddsum = 0;
    let sum =0;
    let init = 2;

    do {
        if(init %2==0){
            evensum +=init;
        }
        else if(init%2==1) {
            oddsum+=init;
        }
        sum = evensum+oddsum;
        
    } while (init++ < 10);
    console.log('짝수의 합은' + evensum);
    console.log('홀수의 합은' + oddsum);
    console.log('총합은' + sum);
}

// console.log(Ex3());

//react map써봐

function Ex4_react() {
    
    // console.log('짝수의 합은' + evensum);
    // console.log('홀수의 합은' + oddsum);
    // console.log('총합은' + sum);
}

// console.log(Ex4_react());



function Ex5() {
    let evensum = 0;
    let oddsum = 0;
    let sum =0;
    for (let i = 2; i < 11; i++) {

        if(i%2==0){
            evensum +=i;
        }
        else if(i%2==1) {
            oddsum+=i;
        }
        sum = evensum+oddsum;
        
    }

    let array = [evensum,oddsum,sum];
    array.map((item) => {console.log(item);})
    
}

export default Ex5;