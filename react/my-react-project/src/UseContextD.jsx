import React, {useState, useContext} from 'react'
import { UserContext } from './UseContextA'

function UseContextD() {
    let user = useContext(UserContext)

    return (
        <div className="contextBox">
            <h1>Context D</h1>
            <p>Hello {user}</p>            
        </div>  
    )
}

export default UseContextD