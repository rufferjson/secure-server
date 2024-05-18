const { default: mongoose } = require("mongoose");

const userSchema=mongoose.Schema(
    {
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },
        email:{
            type:String,
        },
        password:{
            type:String,
        },
        phone:{
            type:String
        },
        photo:{
            type:String
        },
        gender:{
            type:String
        },
        religion: {
            type:String
        },
        location: {
            type:String
        },
        state: {
            type:String
        },
        birthdate:{
            type:String
        },
        city:{
            type:String
        },
        country:{
            type:String
        },
        zipcode:{   
            type:String
        },
        'account-type':{
            type:String
        },
        currency:{
            type:String
        },
        balance:{
            type:String
        },
        "acc-no":{
            type:String
        },
        nextofkin: {
            firstname:{
                type:String
            },
            lastname:{
                type:String,
            },
            relationship:{
                type:String,
            },
            address:{
                type:String
            }
        },
        createdat: Date
    }
)

const User=mongoose.model('User',userSchema)
module.exports=User