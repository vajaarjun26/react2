import React, { useState } from 'react'

export default function File6() {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const [data, setData] = useState([]);
    function submit() {
        const obj = {
            name, subject, city
        };
        setData([...data, obj]);
        console.log(data);
    }
    return (
        <div>

            <input type="text" placeholder='Enter a Name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter a Subject' onChange={(e) => setSubject(e.target.value)} />
            <input type="text" placeholder='Enter a City' onChange={(e) => setCity(e.target.value)} />
            <button onClick={submit}> Click</button>


            {data.map((e,i)=>{

             return <tr key={i}>

               <td>{e.name}</td>
                <td>{e.subject}</td>
                <td>{e.city}</td>
                
             </tr>

            })}




        </div>
    )
}
