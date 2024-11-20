import React, {useState, useEffect, useRef} from 'react'

function StopWatch() {
    let [isRunning, setIsRunning] = useState(false)
    let [elapsedTime, setElapsedTime] = useState(0)
    let startTimeRef = useRef(0)
    let intervalIdRef = useRef(null)

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning])

    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }

    function stop() {
        setIsRunning(false)
    }

    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
        startTimeRef.current = 0
    }

    function showTime() {
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / 1000 % 60)
        let microseconds = Math.floor((elapsedTime % 1000) / 10)

        return `${addZero(minutes)}:${addZero(seconds)}:${addZero(microseconds)}`
    }

    function addZero(n) {
        return (n < 10) ? '0' + n : n
    }

    return (
        <div className="watch-box">
            <h2>{showTime()}</h2>
            <button className="start-button" onClick={start}>Start</button>
            <button className="stop-button" onClick={stop}>Stop</button>
            <button className="reset-button" onClick={reset}>Reset</button>
        </div>
    )
}

export default StopWatch