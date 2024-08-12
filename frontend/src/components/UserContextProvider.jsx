import React from 'react'
import Context from './UserContext.jsx'

const UserContextProvider = ({children}) => {
    //this is used to store data
    const [user, setUser] = React.useState(null)
    return (
        <Context.Provider value={{user, setUser}} >
            {
                children
            }
        </Context.Provider>
    )
}

export default UserContextProvider