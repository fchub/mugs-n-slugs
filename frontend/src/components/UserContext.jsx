import { createContext } from "react";

const UserContext = createContext({
    firstName: 'Guest',
    setFirstName: () => {}
})

export default UserContext