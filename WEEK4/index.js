var express=require("express")
SERVER_PORT=8089
var app = express()

app.get("/hello", (req, res)=>{
    res.send("Hello Express JS")
})

app.get("/user", (req, res)=>{
    res.send(req.query)
})

app.post("/user/:firstname/:lastname", (req, res)=>{
    let name={
        fname:req.params.firstname,
        lname:req.params.lastname
    }
    res.send(name)
})

app.listen(SERVER_PORT, ()=>{
    console.log("Server is listening at http://localhost:8089/")
})