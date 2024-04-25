function Map1() {
    let array = [1,2,3,4,5];
    let newArray = array.map((item) => 
        item * 2
        // console.log('이거'+item);
        //출력 없이 그냥 할거면 return을 줘야한다
    )
    console.log('이거'+newArray);
}

console.log(Map1());

console.log('============');