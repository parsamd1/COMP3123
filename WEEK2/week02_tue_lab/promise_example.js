//Declare the promise

let p1 = new Promise(function(resolve, reject){
    if(1 == 10)
        resolve("--- success ---")
    else
        //reject(Error("--- ERRORS ---"))
        reject("--- ERRORS ---")
})

//NO chaining
p1.then(function(success){
    console.log(success)
}, function(error){
    console.log(error)
})

//Use Arrow functions
p1.then(
    success => console.log(success), 
    error => console.log(error)
)

//Chaining - Not good example
p1.then(success => console.log(success))
  .then((data) => console.log(`Second Then 1 : ${data}`))
  .catch(error => console.log(error))
  .finally(() => console.log("Finally - 1"))


//Chaining - Perfect good example
// p1.then(success => { 
//     //console.log("TTT " + success)
//     return  { "message" : success.toUpperCase() }})
//   .then((data) => console.log(`Second Then : ${data}`))
//   .then((data) => console.log(`Third Then : ${data}`))
//   .catch(error =>  { throw error })
//   .catch(error => console.log("E : " + error))
//   .finally(() => console.log("Finally - 2"))


  //Chaining - Perfect good example
p1.then(success => { 
    //console.log("TTT " + success)
    return  { "message" : success.toUpperCase() }})
  .catch(error =>  { 
    //console.log("asfbfba f")  
    throw error 
    })
  .then((data) => console.log(`Second Then 2 : ${data}`))
  .finally(() => console.log("Finally - 2"))
  .then((data) => console.log(`Third Then : ${data}`))
  .catch(error => console.log("E : " + error))
  