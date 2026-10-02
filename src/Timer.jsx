import { useEffect, useState } from "react";

function Timer() {

    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <>
     
            <h1>{count}</h1>
               <div style={{ display: 'flex' }}>
              <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
        </>
    )

}
export default Timer;