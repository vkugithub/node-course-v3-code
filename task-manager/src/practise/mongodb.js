// CRUD create read update delete

//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
const {MongoClient, ObjectID} = require('mongodb')

const objectID=new ObjectID()
console.log(objectID)
console.log(objectID.getTimestamp())
console.log(objectID.id.length)
console.log(objectID.toHexString().length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

//    db.collection('users').insertOne({
//        name: 'Andrew',
//        age: 27
//    })
//    db.collection('users').insertMany([
//        {
//            name: 'Andrew',
//            age: 27
//        },
//        {
//            name: 'Vikrant',
//            age: 30
//        }
//        ]
//        , (error, result) => {
//                if (error) {
//                    return console.log('Unable to insert tasks!')
//                }
//
//                console.log(result.ops)
//            } )

//        db.collection('users').updateOne(
//        {_id:new ObjectID("5dd2335c0d731b05b543b2fd")},
//        { $set:{
//            name : "Andrew 2"
//            }
//        }
//        ).then((result)=>{
//            console.log(result)
//        }).catch((error)=>{
//            console.log('Problem to update ', error)
//        })

//    db.collection('users').updateOne(  //It updates first one as found
//        {name : "Andrew"},
//        { $set:{
//            name : "Andrew 2"
//            }
//        }
//        ).then((result)=>{
//            console.log(result)
//        }).catch((error)=>{
//            console.log('Problem to update ', error)
//        })

//        db.collection('users').updateMany(
//                {name : "Andrew"},
//                { $inc:{
//                    age : 1
//                    }
//                }
//                ).then((result)=>{
//                    console.log(result)
//                }).catch((error)=>{
//                    console.log('Problem to update ', error)
//                })

          db.collection('users').deleteOne(
                {age : 27},
                ).then((result)=>{
                    console.log(result)
                }).catch((error)=>{
                    console.log('Problem to delete ', error)
                })

})