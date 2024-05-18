const { default: mongoose } = require("mongoose");

const statementSchema=mongoose.Schema(
    {
        "user-token":{
            type:String
        },
        month:{
            type:String
        },
        credits:{
            type:String,
        },
        debits:{
            type:String,
        },
        recurring:{
            type:String
        }
    }
)

const Statement=mongoose.model('Satement',statementSchema)
module.exports=Statement;