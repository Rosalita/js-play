// to run this node promises_are_fun.js

// promises can be immediately resolved

let anImmediatelyResolvedPromise = Promise.resolve("learn promises")

// once a promise resolves it is immutable
// can check after its resolved to see if it was resolved
// which is cool because can't do this for events

anImmediatelyResolvedPromise.then((res)=> console.log(res)) // learn promises

// The standard way to create a promise is by using the new Promise constructor
// which accepts a handler that is given two functions as parameters.
// The first handler is typically named resolve
// It's a function to call with the future value when it's ready
// The second handler is typically named reject
// It's a function to call to reject the promise if it can't resolve the future value

// all promises start in a pending state
// from this pending state they can be resolved

let aPromiseThatIsResolved = new Promise(function(resolve,reject){
     resolve("resolved")
})

// or rejected, but rejecting is not the exact opposite of resolving

let aPromiseThatIsRejected = new Promise(function(resolve,reject){
  reject("rejected") 
// if rejecting, need to handle rejection with a catch
}).catch(function(value) {
     return value
})

// can use then to see what the future values of the promises were

aPromiseThatIsResolved.then((value) => 
  console.log(value) // resolved
)

aPromiseThatIsRejected.then((value) =>
  console.log(value) // rejected
)

// technically the first and second values in a new promise can be called anything

let abPromise = new Promise((a,b)=>
  a("this promise is resolved")
)

abPromise.then((value) => 
  console.log(value) // resolved
)












