import { useEffect } from "react";
import Contacts from "./Contacts";

function UseEffectNew({ count }) {

    useEffect(() => {
        console.log("mounting page");
    }, [])
    useEffect(() => {
        console.log("updated page");
    }, [count])

    useEffect(() => {
        return () => {
            console.log("unmounting page");
        }
    }, [])

    return (
        <>
            <h2>Count:{count}</h2>
            <Contacts />

        </>
    )

}

export default UseEffectNew;
