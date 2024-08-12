import SignIn from '../pages/account_subpages/SignIn.jsx'
import { useEffect } from 'react'
import axios from 'axios'

let dataCheck = []
let firstName = ''
let lastName = ''
let userName = ''
let email = ''

const ReadingUserInfo = () => {
    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])
    
    const axiosFetchData = async(processing) => {
        await axios.get('http://localhost:4000/usertest')
        .then(res => {
            if(processing) {
                dataCheck = res.data
            }
        })
        .catch(err => console.log(err))
        console.log("hello")
    }
    
    Read = () => {
        if(userEntry != '') {
            userEntry = SignIn.validateUser()
            firstName = userEntry.firstName
            lastName = userEntry.lastName
            email = userEntry.email
            userName = userEntry.userName
        } 
    }
}

ReadingUserInfo()

const UserInfo = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
}
    
export default UserInfo