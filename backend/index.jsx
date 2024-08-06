const express = require('express')
const cors = require('cors') //allows us to access server from different domains
const bodyParser = require('body-parser') //used for form posts
const router = require('./routes/router.jsx')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express() //using node with express to run server

//USE THIS VERY SPECIFIC ORDERING! FOr node

app.use(bodyParser.json()) //parsing body for forms when submitting forms, accepting it as json data so we can process
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200 //when it becomes success, returns 200 status for us
}

app.use(cors(corsOptions))
app.use('/', router) //sets up router, instead of app.get and app.post
//router MUST be at the very end, right here

//RIGHT before port, set up mongoose...so now all you need is connection stream in Mongoose
const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log('DB Connected!'))
.catch(err => console.log('ERROR! ' + err))

//Why - to mask and hide important info (passwords, etc...)
const port = process.env.PORT || 4000//USE the variable name in ENV file, or 4000 if env not there yet
//need both ports to be running
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})