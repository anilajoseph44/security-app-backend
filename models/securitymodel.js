const mongoose=require("mongoose")

const SecuritySchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        empid:{
            type:String,
            require:true
        },
        address:{
            type:String,
        },
        phno:{
            type:String
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    }
)


module.exports=mongoose.model("securities",SecuritySchema)