const fizzbuzz = require("../src/fizzbuzz.js").fizzbuzz

test('fizzbuzz exists and says hello when we say hi', () => {
    expect(fizzbuzz('hi')).toEqual("Hello")
})

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('fizzbuzz can count to 5', () =>{
    //input nothing
    // output to be numbers 1 to 5
   expect(fizzbuzz(5)).toEqual('1,2,3,4,5')
})

test('fizzbuzz can count to 10', () =>{
    //input nothing
    // output to be numbers 1 to 5
   expect(fizzbuzz(10)).toEqual('1,2,3,4,5,6,7,8,9,10')
})

