const validator = require('validator')

console.log(validator.isEmail('vikrnt@com'))
console.log(validator.isEmail('vikrant@gmail.com'))
console.log(validator.isURL('https://vikrant.com'))

console.log(__dirname)
console.log(__filename)