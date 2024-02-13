const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const securityrouting=require("./controllers/securityrouter")
const visitorRouting=require("./controllers/visitorrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anilasandrajose01:sandrajoseph99@cluster0.vpgykyq.mongodb.net/securityDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/security",securityrouting)
app.use("/api/visitor",visitorRouting)

app.listen(3005,()=>{
    console.log("Server running")
})