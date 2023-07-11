require('dotenv').config()
let express = require('express')
let app = express()
app.use('/places',require('./controllers/places'))
app.get('/', (req,res)=>{
    res.send('hello world')
})
app.get('*', (req,res)=>{
    res.statusMessage(404).send('<h1>404 Page</h1>')
})
app.listen(process.env.PORT)