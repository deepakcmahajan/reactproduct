import { UserContext } from "./UserCtext"
import { useContext } from "react";
import Consum2 from "./Consum2.jsx";

function Consum()
{
    
     const {name,setName} = useContext(UserContext);
    return(
        <>
            <h2>Child NAme is : {name}</h2>
            <Consum2 />
            <button onClick={()=>setName("Prajwal")}>Change Name</button>
        </>
    )
}
export default Consum;