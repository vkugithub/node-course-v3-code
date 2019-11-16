const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

//console.log(__dirname)
//console.log(__filename)
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index',{
        name:'vikrant',
        title: 'Title',
    })
})

app.get('/help', (req, res) => {
     res.send([{
            name: 'Andrew'
        }, {
            name: 'Sarah'
        }])
})

//app.get('/about', (req, res) => {
//    res.send('About')
//})

app.get('/help/*',(req,res)=>{
    res.render('404', {
        title : '404',
        name : 'Vikrant',
        errorMessage : 'Help not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404', {
        title : '404',
        name : 'Vikrant',
        errorMessage : 'Page not found'
    })
})


app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})