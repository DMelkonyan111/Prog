import React, {useState} from 'react'
import UseContextC from './UseContextC'

function UseContextB() {
    return (
        <div className="contextBox">
            <h1>Context B</h1>
            <UseContextC />
        </div>
    )
}

export default UseContextB