import React, { useState } from "react"

function ColorPicker() {
    let [color, setColor] = useState('#FFFFFF')

    function colorHandler(e) {
        setColor(e.target.value)
    }

    return (
        <div className="color-picker-block">
            <h1 className="color-picker-h1">Color Picker</h1>
            <div className="selected-color" style={{backgroundColor: color}}>
                <h2>Selected color {color}</h2>
            </div>
            <label className="color-picker-label">Select a color</label>
            <input className="color-picker-input" type="color" value={color} onChange={colorHandler}/>
        </div>
    )
}

export default ColorPicker