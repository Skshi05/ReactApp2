
import './App.css';
import React from 'react'
//import Display from './Componenets/Display';
import Robotsearch from './Componenets/Robotsearch';

//import Usearray from './Componenets/Usearray';
//import Basicform from './Componenets/Basicform';


// function App() {
//   const [myText, setMyText] = useState("React Js");
//   const changeText=()=>{
//     let val = myText;
//     if(val==="React Js"){
//       setMyText("I am changed")
//     }
//     else{
//       setMyText("React Js")
//     }
//   }
//   return (
//     <div>
//       <h1>{myText}</h1>
//       <button onClick={changeText}>Click me</button> */}
//       <Usearray/>
//       <Basicform/>
//     </div>
//   )
// }




function App() {
  
  
  return (
    <div className='content'>
     
      <Robotsearch/>
    </div>
  );
  }

export default App



