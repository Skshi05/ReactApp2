import React,{useState} from 'react'

function Basicform() {
    const[email,setMyemail] = useState("");
    const[password,setMypass] = useState("");
    const[allEntry,setNewentry] =useState([]);
    const Onsubmit=(e)=>{
        e.preventDefault()
        const newEntry = {id: new Date().getTime().toString() ,email :email, password : password}
        setNewentry([...allEntry,newEntry])
        console.log(allEntry)
        setMyemail("")
        setMypass("")
    }
  return (
    <div>
      <form action="" onSubmit={Onsubmit}>
        <div>
        <label htmlFor='email'>Email</label>
        <input type="text" name="email" id="email" autoComplete='off' value={email}
        onChange={(e)=>setMyemail(e.target.value)}
        />
       
        </div>
        
       <div>
       <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" autoComplete='off' value={password}
         onChange={(e)=>setMypass(e.target.value)}/>
       </div>
        
        <div>
            <button>Submit</button>
        </div>
      </form>
      <div>
        {
            allEntry.map((ele)=>{
                const{id,email,password}=ele
                return(
                    <div className="content" key={id}>
                    <p>{email}</p>
                    <p>{password}</p>
                    </div>
                )
                
            })
        }
      </div>
    </div>
  )
}

export default Basicform
