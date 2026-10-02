import SubChild from "./SubChild";
function Child({name})
{
    function show()
    {
        console.log("Child cop");
    }
    show();
    return(<>
    
    <h2>Child Class: {name}</h2>
    <SubChild name={name} />
    </>
    )
}
export default Child; 