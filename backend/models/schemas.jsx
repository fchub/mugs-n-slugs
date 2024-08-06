//doing tables here - setting up the schema here is KEY, then data is put in directly
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//default one
const userSchema = new Schema({
    name: {type:String},
    email: {type:String},
    website: {type:String},
    entryDate: {type:Date, default:Date.now}
})

//userTest for make account - v0.1
const userTestSchema = new Schema( {
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    userName: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    country: {type:String},
    campStyle: {type:String},
    dob: {type:Date},
    entryDate: {type:Date, default:Date.now}
})

//for contact form
const contactSchema = new Schema({
    email: {type:String, required:true},
    website: {type:String, required:true},
    message: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}    
})

//setting up Users, so we can use in project to call it
//use UserSchema from above
//last one = database name
const Users = mongoose.model('Users', userSchema, 'users')
const UserTest = mongoose.model('UserTest', userTestSchema, 'user_test')
const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
//when initialized, will create the form table automatically when it can't find it
const mySchemas = {'Users':Users, 'UserTest':UserTest, 'Contact':Contact}

module.exports = mySchemas