function SubChild({name})
{
    function show()
    {
        console.log("sub Child cop");
    }
    show();
    return(
        <>
        <h2>Sub Child : {name}</h2>
        </>
    )
}
export default SubChild;