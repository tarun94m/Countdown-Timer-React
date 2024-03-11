import { useState, useEffect } from "react";
import CountDownTimer from "./CountDownTimer";

const Timer = () => {

    const [hh, setHh] = useState(0);
    const [mm, setMm] = useState(0);
    const [ss, setSs] = useState(0);
    const [duration, setDuration] = useState(hh * 3600 + mm * 60 + ss);
    const [ticker, setTicker] = useState(null);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (duration == 0) {
            clearInterval(ticker);
            setTicker(null);
            setPause(false);
            setHh(0);
            setMm(0);
            setSs(0);
        }
    }, [duration])

    function handleSubmit() {
        setDuration(hh * 3600 + mm * 60 + ss);
        handleStart();
    }

    function handlePause() {
        clearInterval(ticker);
        setPause(true);
    }

    function handleStart() {
        setPause(false);
        clearInterval(ticker);
        const id = setInterval(() => {
            setDuration((d) => d - 1);
        }, 1000);
        setTicker(id);
    }
    function handleReset() {
        setDuration(0);
    }

    return (
        <>
        { ticker == null ?
            <div className="timer">
                <input className="inputFields" onChange={(e) => setHh(parseInt(e.target.value))} placeholder="hh" /><span>:</span>
                <input className="inputFields" onChange={(e) => setMm(parseInt(e.target.value))} placeholder="mm" /><span>:</span>
                <input className="inputFields" onChange={(e) => setSs(parseInt(e.target.value))} placeholder="ss" />
                <button onClick={handleSubmit}>Start</button>
            </div> :
            <div className="countDown">
                <CountDownTimer duration={duration} />
                {!pause ? <button onClick={handlePause}>Pause</button> : <button onClick={handleStart}>Start</button>}
                <button onClick={handleReset}>Reset</button>
            </div> 
        }
        </>
    )
}


export default Timer;