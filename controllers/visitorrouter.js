const express=require("express")

const visitormodel=require("../models/visitormodel")
const router=express.Router()

router.post("/addvisitor",async(req,res)=>{

    let data=req.body
    let visitor=new visitormodel(data)
    let result=await visitor.save()
    res.json(
        {
            status:"success",

        }
    )

})


router.get("/viewvisitor",async(req,res)=>{

    let result=await visitormodel.find().
    populate("userid","name email -_id").
    exec()
    res.json(result)

})

module.exports=router