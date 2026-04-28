import { useState, useRef } from "react";
export default function TimerChallenge({title, timer}) {
    const [isRunning, setIsRunning] = useState(false);
    const [isExpired, setIsExpired] = useState(false);
    const timerRef = useRef();
    function handleClick() {
        setIsRunning(!isRunning);
        timerRef.current = setInterval(() => {
            setIsExpired(true);
        }, timer * 1000);
    }
    function handleStop() {
        clearInterval(timerRef.current);
        setIsRunning(false);
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {isExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {timer} second{timer === 1 ? '' : 's'} 
            </p>
            <p className="">
                <button onClick={isRunning ? handleStop : handleClick}>{isRunning ? 'Stop' : 'Start'} Challenge</button>
            </p>
            <p className={isRunning ? 'active' : undefined}>
                {isRunning ? 'Challenge is running...' : 'Not started yet'}
            </p>
        </section>
    );
}