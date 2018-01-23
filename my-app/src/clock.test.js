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
  expect(myClock.hasTicked()).toBeTruthy()
});

test('The B*stard clock will not tick until a minute has passed', () => {
  const myClock = new Clock("13:41:27")
  expect(myClock.hasTicked()).toBeFalsy()
})

test('Can read minutes on the clock', () =>{
  const myClock = new Clock ("10:11:12")
  // 1. decide the inputs and outputs
  // input is the time
  // output is the minutes
  // 2. decide function signature
  // it will be a method on the Clock class to getMinutes
  // it will return the minutes
  expect(myClock.getMinutes()).toEqual("11")
})

test('The clock beeps every hour', () => {
  const myClock = new Clock("09:00:00")
  expect(myClock.hasBeeped()).toBeTruthy()
})

test('The clock will not beep unless an hour has passed', () =>{
  const myClock = new Clock("09:05:00")
  expect(myClock.hasBeeped()).toBeFalsy()
})

// Tick every minute
// Beep every hour
// Wake us up at 7am
// More crazy plans...
