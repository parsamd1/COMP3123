function getPromise(){
    return new Promise(function(resolve, reject){
        if(1 == 1)
            resolve("--- success ---")
        else
            //reject(Error("--- ERRORS ---"))
            reject("--- ERRORS ---")
    })
}

function add(a ,b){
    return a + b
}

async function getData(){
    console.log("Inside async function")
    try{
        let result = await getPromise()
        console.log(result)
        //throw new Error("--- ERRORS FROM ASYNC---")
    }catch(e){
        console.log(e)
    }

    let sum = await add(10, 2)

    console.log(sum)

    // getPromise().then(s => console.log("S : " + s))
    // .catch(e => console.log("E : " + e))

}

getData()
// getData().then(s => console.log("SS : " + s))
// .catch(e => console.log("EE : " + e))