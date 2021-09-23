const express =  require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
const connectDB = require('./server/database/connection.js')

const app = express()

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 5000
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// set view engine 
app.set('View engine', 'ejs')
// load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

// calling databse
connectDB()

//  load routes
app.use('/',require('./server/routes/router.js'))


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})