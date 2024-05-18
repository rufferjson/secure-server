const { default: mongoose } = require("mongoose");

const RtransactionSchema=mongoose.Schema(
    {
        "user-token":{
            type:String
        },
        description:{
            type:String
        },
        amount:{
            type:String,
        },
        type:{
            type:String,
        },
        date:{
            type:String
        },
        status:{
            type:String,
        }
    }
)

const Rtransaction=mongoose.model('Rtransaction',RtransactionSchema)
module.exports=Rtransaction;