import { useEffect, useState } from "react"
function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() =>
    (
        /*fetch("https://jsonplaceholder.typicode.com/todos")*/
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((ref) => ref.json())
            .then((data) => setData(data))
    ), []);

//     const state = data.find(
//   (item) => item.state-province === "Texas"
// );
    return (
        <>
            {/* <h1>Data is</h1>

            <p style={{ color: 'Red'}}>{data[2]?.name} - {data[2]?.web_pages[0]}</p>
<p>
  {state  ? data.name} : "Not Found"}
</p>
         
            {data.map((pro) =>
            (
                <p key={pro.name}>{pro.name} - {pro.web_pages}</p>
            ))

            } */}


            <h2>Data is :</h2>
            {
                data.map((item)=>
                (
                    <p>{item.userId===2 ? item.title:null}</p>
                ))
            }
        </>
    )
}


export default FetchData;