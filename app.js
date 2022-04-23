const express=require("express")
var app=express()

const bodyParser=require("body-parser")
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to home page </h1>")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
})

app.get("/calculator",(req,res)=>{
    // console.log(__dirname);
    res.sendFile(__dirname+"/index.html")
})

app.post("/calculator",(req,res)=>{ 
    console.log(req.body);
    res.send("<h1> Your data is submitted successfully </h1>")
    // var v1=Number(req.body.v1)
    // var v2=Number(req.body.v2)
    // var v3=v1+v2
    // res.end(v3)

})

.listen(8000,()=>{
    console.log("Listen at 8000 port");
})