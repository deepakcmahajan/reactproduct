import { useEffect} from "react";

    function UseEffect({count})
    {
        const show = () => {

            console.log("page loaded", count);
        }
        useEffect(() =>
        {
            show();

        }, [] )

        return(

            <>
            
            <h2>Count:{count}</h2>
            </>

        )

    }

export default UseEffect;
 