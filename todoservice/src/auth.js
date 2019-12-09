const jwt = require('jsonwebtoken')
const  userName = 'vikrant'
const password = 'vikrant'

const auth = async (req, res, next) => {
console.log('auth function')
    try{
        console.log('Auth 1')
        const token=req.header('Authorization').replace('Bearer ','')
        console.log('Auth ',token)
        const decoded =jwt.verify(token,'thisismynewcourse')
        if(userName===decoded._id){
        req.token = token
        req.user=decoded.username
        next()
        }else{
            throw new Error('Need to login')
        }
    }catch(e){
        console.log(e)
        res.status(401).send('token error')
    }
}
module.exports=auth