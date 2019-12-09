const bcrypt = require('bcryptjs')

const myFunction = async ()=>{
    const password = 'Hello123'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashedPassword)

    const isMatch=await bcrypt.compare(password, hashedPassword)
    console.log(isMatch)
}


myFunction()