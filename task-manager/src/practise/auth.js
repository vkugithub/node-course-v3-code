const jwt = require('jsonwebtoken')
const User = require('./model/User')
const auth = async (req, res, next) => {
console.log('auth function')
    try{
        const token=req.header('Authorization').replace('Bearer ','')

        const decoded =jwt.verify(token,'thisismynewcourse')
//        console.log('decoded',decoded)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

//        console.log('user',user)

        if(!user){
        throw new Error()
        }

        req.token = token
        req.user=user
        next()
    }catch(e){
        console.log(e)
        res.status(401).send({error: 'Please authenticate. '})
    }
}
module.exports=auth