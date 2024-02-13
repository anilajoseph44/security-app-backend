const express=require("express")
const securitymodel=require("../models/securitymodel")
const bcrypt=require("bcryptjs")

const router=express.Router()

hashpasswordgenerator=async(password)=>{

    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)

}

router.post("/securityadd",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashpasswordgenerator(password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
            let security=new securitymodel(data)
            let result=security.save()
            res.json(
                {
                    status:"success"
                }
            )
        }
    )


})

router.post("/signin",async(req,res)=>{
    let email=req.body.email
    let data=await securitymodel.findOne({"email":email})
    if(!data)
    {
        return res.json(
            {
                status:"Invalid security",
            }
        )
    }

    let dbpassword=data.password
    let inputpassword=req.body.password
    const match=await bcrypt.compare(inputpassword,dbpassword)
    if(!match)
    {
        return res.json(
            {
                status:"Incorrect password"
            }
        )
    }

    res.json(
        {
            status:"success",
            "userdata":data
        }
    )

})

router.get("/viewsecurities",async(req,res)=>{

    let result=await securitymodel.find()
    res.json(result)

})




module.exports=router