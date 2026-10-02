import { useState } from "react";
function States()
{
   const [count,setCount]=useState(0);
    return(
        <>
          <h1>Count: {count}</h1>
          <button onClick={()=>setCount(count+1)}>Increase</button>
           <button onClick={()=>setCount(count-1)}>descrease</button>
           <button onClick={()=>setCount(0)}>set 0</button>
          
        </>
    )
}
export default States;