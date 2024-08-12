import './style/App.scss'
import './index.css'
import Router from './components/Router.jsx'
import UserContext from './components/UserContext.jsx'
import React, { useState, useContext } from 'react'

function App() {
/*  const userInfo = {
    firstName: 'Frank',
    email: "fycfyc741@gmail.com",
    loggedIn: false,
    pastLists: 4,
    friends: 11,
  } */

  const [firstName, setFirstName] = useState('')
  const value = { firstName, setFirstName }

  return (
    <>
      <div className="App">
        <UserContext.Provider value={value}>
          <Router />
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
