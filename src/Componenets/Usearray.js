import React,{useState} from 'react'

function Usearray() {
    

    const bioData =[
        {Name : "sakshi",Age : 20},
        {Name : "Riya",Age: 21},
        {Name : "saku",Age:23}
    ]
    const[arr,setArr] = useState(bioData)
        const clearMe=()=>{
    setArr([]);
}

  return (
    <div>
        {
    arr.map((Element) => <h1>CurrName : {Element.Name} & CurrAge :{Element.Age}</h1>)
      
        }
        <button onClick={clearMe}>Clear</button>
      
    </div>
  )
}

export default Usearray
