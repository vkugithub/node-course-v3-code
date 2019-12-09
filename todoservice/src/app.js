const express = require('express')
//require('./db/mongoose')
//const userRouter = require('./routers/user')
//const taskRouter = require('./routers/task')
const port = process.env.PORT || 3001
const app = express()
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

app.use(express.json())
//app.use(userRouter)
//app.use(taskRouter)

module.exports = app