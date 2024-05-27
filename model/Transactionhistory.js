const { default: mongoose } = require("mongoose");

const transactionHSchema=mongoose.Schema(
    {
        description:{
            type:String
        },
        amount:{
            type:String
        },
        date:{
            type:String
        },
        type: {
            type:String
        },
        current_balance: {
            type:String
        },
        owner: {
            type:String
        }
    }
)

const TransactionH=mongoose.model('TransactionH',transactionHSchema)
module.exports=TransactionH;
