import React, {useState, useEffect} from 'react'

function Clock() {
    let [time, setTime] = useState(new Date())

    useEffect(() => {
        let updateTime = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(updateTime)
        }
    }, [])

    function showTime() {
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()

        return `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}`
    }

    function addZero(number) {
        return (number < 10) ? '0' + number : number
    }

    return (
        <div className="screen">
            <p>{showTime()}</p>
        </div>
    )
}

export default Clock