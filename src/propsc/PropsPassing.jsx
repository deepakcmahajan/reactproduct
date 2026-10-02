import { useState } from "react";
import Child from "./Child";
function PropsPassing()
{
    const [name,setName] = useState("Parent");
function show()
    {
        console.log("Parent cop");
    }
    show();
return(
    <>
       <h2>Parent componant</h2>
       <Child name={name} />
    </>
)
}
export default PropsPassing;

