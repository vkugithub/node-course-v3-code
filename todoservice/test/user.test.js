const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/').send({
        "username": "vikrant",
        "password" :  "vikrant"
    }).expect(200)
})