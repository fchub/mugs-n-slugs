const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas.jsx')

//NEED async if there's an await
//IF you need params in the /contact/ (eg. if different button/id for send vs. edit or soemthing)
//:a for actions, in case there are multiple things you can do 
router.post('/contact/:a', async(req, res) => {
    //same as const email = req.body.email...
    const {email, website, message} = req.body //taking the body of the post request from frontend
    const action = req.params.a

    switch(action) {
        case "send": //if case is send, then we just send it
            //NOW posting it/saving it to our contact_form db
            //mapping values to schema values/table values
            const contactData = {email: email, website: website, message: message}
            const newContact = new schemas.Contact(contactData)
            const saveContact = await newContact.save() //always do await when hosting URL or saving, anything that interacts

            if (saveContact) {
                res.send('Message sent. Thank you!') //this is the message that is sent back
            } else {
                res.send('Failed to send message. Server error')
            }
            //look at Home.jsx for printing of {res.data} - response of data
            
            
        break;
        default: 
            res.send('Invalid request')
            break

    }
    
    res.end() //good to close it off
    //cannot see it on the website, cuz we're only doing a POST on it
    //GET is what displays the data!
})

//searching through contacts or data, using params (recall)
//router.get('/contact/:id', (rez, res)) => ...

//searching through contacts or data, and deleting or acting on that contact with id
//router.get('/contact/:a/:id)...

//so instead of doing all the Get and Post stuff in the index, do it here
router.get('/users', async(req, res) => {
    //THIS is where database goes! so from the Schemas
    const users = schemas.Users
    
    //can find anything in FIND
    // const userData = await users.find({}).exec()
    // if (userData) {
    //     res.send(JSON.stringify(userData)) //thigs stringifies everything to JSON format, like below
    //     //so can be called and used in the same way as the below
    //     //no need to hard code the below
    // }

    const userData = 
    [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
    ]

      res.send(userData)
})

module.exports = router