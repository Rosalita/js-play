const Clock = require("./clock.js").Clock


test ('There is a clock that has a time', () => {
  const myClock = new Clock("07:00:00")
  expect(myClock._time).toEqual("07:00:00")
});

test ('The clock can get the time', () => {
  const myClock = new Clock ("12:34:56")
  // 1. decide the inputs and outputs
  // inputs = none, outputs = the time
  // 2. decide the function signature
  // it will be a method called getTime
  // it will return the time
  expect(myClock.getTime()).toEqual("12:34:56")
})

test('Can read seconds on the clock', () =>{
  const myClock = new Clock ("15:42:26")
  // 1. decide the inputs and outputs
  // input is the time
  // output is the seconds
  // 2. decide function signature
  // it will be a method on the Clock class to getSeconds
  // it will return the seconds
  expect(myClock.getSeconds()).toEqual("26")
})

test('The f**king clock ticks every minute', () => {
  const myClock = new Clock("08:14:00")
  // 1. decide the inputs and outputs
  // input is the time
  // output is whether it ticked or not (probably boolean)
  // 2. decide function signature
  // what parameters will the function take
  // it will look at the time
  // it will be a method on the Clock class
  // will it return true or false
  // what is the smallest amount of functionality
  // adding a hasTicked method to the Clock
  // expecting that if the time ends in 00 hasTicked is true
  // expecting that if hasTicked doesn't end in 00 that hasTicked is false
//  expect(myClock.hasTicked()).toEqual("26")
  expect(myClock.hasTicked()).toBeTruthy()
  //
});


// Tick every minute
// Beep every hour
// Wake us up at 7am
// More crazy plans...
