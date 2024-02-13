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


module.exports=router