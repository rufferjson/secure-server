const { default: mongoose } = require("mongoose");

const transactionHSchema=mongoose.Schema(
    {
        description:{
            type:String
        },
        amount:{
            type:String
        },
        "user-token":{
            type:String
        },
        date:{
            type:String
        },
        type: {
            type:String
        },
        cbalance: {
            type:String
        },
        status:{
            type:String
        }
    }
)

const TransactionH=mongoose.model('TransactionH',transactionHSchema)
module.exports=TransactionH;
