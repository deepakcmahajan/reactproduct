import { UserContext } from "./UserCtext"
import { useContext } from "react";
function Consum2()
{

       const {name,setName} = useContext(UserContext);
    return(
        <>
            <h2>Subchild : {name}</h2>
        </>
    )
}
export default Consum2;