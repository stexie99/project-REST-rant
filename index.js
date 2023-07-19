require('dotenv').config()
let express = require('express')
let app = express()

app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//controllers and routes
app.use('/places',require('./controllers/places'))
app.get('/', (req,res)=>{
    res.render('home')
})
app.get('*', (req,res)=>{
    res.render('error404')
})
app.listen(process.env.PORT)