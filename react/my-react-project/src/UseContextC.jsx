import React, {useState, useContext} from 'react'
import UseContextD from './UseContextD'
import { UserContext } from './UseContextA'

function UseContextC() {
    let user = useContext(UserContext)

    return (
        <div className="contextBox">
            <h1>Context C</h1>
            <p>Hello {user}</p>
            <UseContextD />
        </div>
    )
}

export default UseContextC