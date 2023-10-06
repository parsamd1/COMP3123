

/* Callback functions */

function sayHello(){
    console.log("Hello World")
}

function useCallBack(n, callback){
    if(n == 10){
        callback()
    }
}

useCallBack(10, sayHello)

//Callback with parameter
const greet =  (name) => `Hello, ${name}`

function greetMe(name, callback){
    let result = callback(name)
    console.log(result)
}

greetMe("Pritesh", greet)

//Inbuilt callback
setTimeout(sayHello, 5 * 1000)

console.log("---- END ----")
