const bcrypt=require('bcrypt')
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/Usermodel');
const router = express.Router()

const JWT_SECRET = 'qwertyuiop';

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.status(401).json({message: 'Unauthorized without token'});
    
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                        console.log('Token has expired. Please log in again.');
                        return res.status(402).json({ message: 'Token has expired. Please log in again.' });
                } else {
                        return res.status(401).json({message: 'Unauthorized without token'});  // Forbidden if token is invalid
                }
            }
            delete user.data.password;
            req.user = user;
            next();
        });
}
    

router.get('/profile',authenticateToken,(req,res) => {
        res.send({data: req.user})
});    

        //create new user
router.post('/register',async (req,res) => {

        let {
                email,
                pss,
                firstname,
                lastname,
                phone,
                dob,
                photo,
                gender,
                religion,
                location,
                state,
                city,
                country,
                zipcode,
                bfirstname,
                blastname,
                brelationship,
                baddress,
                balance,
                acctType
        } = req.body;

        

        try {
                console.log('user adding')
                pss = await bcrypt.hashSync(pss,10);
                const userexist = await User.findOne({email});
                if (userexist) res.send({status: 401});
                else {
                        const user = new User({
                                firstname,                       
                                lastname,
                                email,
                                password: pss,
                                phone,
                                photo,
                                gender,
                                religion,
                                location,
                                birthdate: dob,
                                city,
                                country,
                                state,  
                                zipcode,
                                'account-type': acctType,
                                currency: 'US Dollar',
                                balance,
                                "acc-no": '',
                                nextofkin: {
                                        firstname: bfirstname,
                                        lastname: blastname,
                                        relationship: brelationship,
                                        address: baddress
                                },
                                createdat: new Date()
                        });
                        await user.save();
                        res.send({status: 200,});
                }
                
        } catch (error) {
                console.log({error});                
        }

});


        //login new user
router.post('/login',async (req,res) => {

        let {
                email,
                password
        } = req.body;
    
        try {
                const user = await User.findOne({
                        email,
                });
                
                if (user) {
                        bcrypt.compare(password,user.password,(err,rsult) => {
                                if (rsult) {
                                        const token = jwt.sign({data: user},JWT_SECRET, { expiresIn: '120m' })
                                        res.send({status: 200,message: user.firstname || ' ',token});
                                } else res.send({status: 401,message: "Incorrect Password"});
                        })

                } else res.send({status: 401,message: "Invalid email address"});
                
        } catch (error) {
                
        }
});


        //get user details
router.get('/:id',(req,res) => {
        const { id } = req.params;
        // const user = findOne({_id:id});
        console.log(req);
    res.send('server home page')
})






module.exports = router;