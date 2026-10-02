import { FaHeartPulse } from "react-icons/fa6";
import { createRoot } from 'react-dom/client';
import React from 'react';
import { useState } from 'react';
import UseEffectNew from "./UseEffectNew";


function Login() {
    const [display, setDisplay] =useState('false');
    const [count, setCount] = useState(0);

    const [sText, setSText] = useState("");
    const [tText, setTText] = useState("");

    const [textColor, setTextColor] = useState("red");

    const handleCopy = () => { setTText(sText); };

    const handleChangeColor = () => {



        setTextColor((textColor === "red") ? "green" : "red");

        alert(cp);
        return cp;
    };

    return (
        <>

           

     { /*      <UseEffectNew count={count} />*/}
            <button onClick={() => setCount(count + 1)}>Click</button>
            <button onClick={() => setDisplay(true)}>Show</button>
              <button onClick={() => setDisplay(false)}>Hide</button>
            <form>
                {/*} <h1 style={{ color: textColor }}>*/}
                <h1 style={{ color: textColor }}>
                    Watch my color change!
                </h1>
                <h1><FaHeartPulse color="red" /> Login.....</h1>
                <div style={{ display: 'flex', paddingBottom: '10px' }} >
                    <h2 style={{ paddingRight: '20px' }}>ID</h2>
                    <input value={sText} onChange={(e) => setSText(e.target.value)} style={{ backgroundColor: "blue", width: '200px' }}></input>

                </div>
                <div style={{ display: 'flex' }} >
                    <h2 style={{ paddingRight: '2px' }}>Pass</h2>
                    <input type='password' style={{ backgroundColor: "blue", width: '200px' }}></input>
                </div>

                <button
                    type="button"
                    onClick={() => setColor("blue")}
                >Blue</button>

                <div style={{ display: 'flex' }} >
                    <h2 style={{ paddingRight: '2px' }}>Replica</h2>
                    <input value={tText} onChange={(e) => setTText(e.target.value)} style={{ backgroundColor: "blue", width: '200px' }}></input>
                </div>
                <br></br>
            </form>
            <div style={{ display: 'flex', gap: "10px" }} >
                <button onClick={handleCopy}>Copy</button>
                <button onClick={handleChangeColor}> Change Color </button>
            </div>
             {
                display ? <UseEffectNew count={count} /> : null
            }
        </>
    )
}
export default Login;