import React, {useState, createContext} from 'react'
import UseContextB from './UseContextB'

export const UserContext = createContext()

function UseContextA() {
    let [user, setUser] = useState('Davo')

    return (
        <div className="contextBox">
            <h1>Context A</h1>
            <h2>Hello {user}</h2>
            <UserContext.Provider value={user}>
                <UseContextB />
            </UserContext.Provider>   
        </div>
    )
}

export default UseContextA