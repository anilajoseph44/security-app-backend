const mongoose=require("mongoose")

const visitorschema=new mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.ObjectId,
            require:true,
            ref:"securities"


        },
        name:
        {
            type:String,
            require:true
        },
        purpose:
        {
            type:String,
            require:true
        },
        address:
        {
            type:String
        },
        phno:
        {
            type:String
        },
        visitingtime:
        {
            type:Date,
            default:Date.now
        }
    }
)


module.exports=mongoose.model("visitors",visitorschema)