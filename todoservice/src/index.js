const app = require('./app')

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const jwt = require('jsonwebtoken')
const auth = require('./auth')

const port = process.env.PORT || 3001

const  userName = 'vikrant'
const password = 'vikrant'
let counter = 0;

let users = [{
                "id": ++counter,
                "username": "in28minutes",
                "description": "Learn to Dance 2 by Node Api",
                "targetDate": "2019-12-03T13:27:09.365+0000",
                "done": false
            },
            {
                "id": ++counter,
                "username": "in28minutes",
                "description": "Learn about Microservices 2 by Node Api",
                "targetDate": "2019-12-03T13:27:09.365+0000",
                "done": false
            },
            {
                "id": ++counter,
                "username": "in28minutes",
                "description": "Learn about Angular by Node Api",
                "targetDate": "2019-12-03T13:27:09.365+0000",
                "done": false
            }]

let token = ''        


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('',(req, res) => {
    console.log(' / calls')
    const token=req.header('Authorization').replace('Bearer ','')
        console.log('Auth ',token)
        const decoded =jwt.verify(token,'thisismynewcourse')
        if(userName===decoded._id){
        req.token = token
        req.user=decoded.username
        return  res.send(users);
        }

    res.send([{
        "id": ++counter,
        "username": "in28minutes",
        "description": "Learn to Dance 2 by Node Api",
        "targetDate": "2019-12-03T13:27:09.365+0000",
        "done": false
    }])
})

app.get('/todos',  (req, res) => {
    console.log('/todos',req.header('Authorization'), req.body)
    res.send(users)
})

const generateAuthToken = async function (username) {
    
    token = jwt.sign({ _id: username.toString() }, 'thisismynewcourse', { expiresIn: '180 seconds' })
    console.log('token',token)
    return token
}

app.post('/authenticate', (req, res,next ) => {
    try {
        // if(!req.body.username || 0 === req.body.username.trim().length ){
        //    return res.status(400).send("User name doesn't exists")
        // }
        if(userName==req.body.username && password==req.body.password){
            generateAuthToken(req.body.username)
            res.status(200).send({'token' : token})
            
        }else{
            res.status(400).send("Login credentials are not matching")
        }
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

app.post('/create',auth, (req, res) => {
    try {
        if(!req.body.id || 0 === req.body.id.trim().length || isNaN(req.body.id)){
           return res.status(400).send("User doesn't have id")
        }
        users.map(user=>{ 
         if(parseInt(user.id)===parseInt(req.body.id)){
            return res.status(400).send("User with id already exists")
          }
        } )
        req.body.id=++counter
        console.log('create request body',req.body)
        users.push(req.body)
        res.status(201).send(users)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

app.post('/delete',auth, (req, res) => {
    try {
        console.log(req.body.id)
        users=users.filter(user=>{ 
            return !(parseInt(user.id)===parseInt(req.body.id))
        } )
        console.log(users)
        res.status(200).send(users)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

app.post('/update',auth, (req, res, next) => {
    try {
        console.log(req.body.id)
        users=users.filter(user=>{ 
            return !(parseInt(user.id)===parseInt(req.body.id))
        } )
        if(parseInt(req.body.id)===-1){
        req.body.id=++counter;
        }
        req.body.id=parseInt(req.body.id)
        users.push(req.body)
        console.log('update ', users)
        res.status(200).send(users)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

