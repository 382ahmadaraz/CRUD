import React,{useState} from 'react'
import './addStudent.css'
import * as yup from "yup"

export default function AddStudent(props) {
    const [name, setName] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    

    const onClickHandler = async () =>{
        console.log("name", name);
        console.log("rollNo", rollNo);
        console.log("email", email);

       
        
        let data = {
            name: name,
            rollNo: rollNo,
            email: email
        }
         try {
           let result = await data
              console.log("result", result);
                setError('')
            props.onAddHandler(data)
         } catch (error) {
            console.log("error", error.toString());
            setError(error.toString())
            
         }
        

        
    }

  return (
    <div className='input-cantainer'>
        <span  style={{backgroundColor:'red', color:'white' }}>{error}</span> <br/>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name"  />
        <input onChange={(e)=>setRollNo(e.target.value)} type="text" placeholder="Roll No" />
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" />
        <button onClick={onClickHandler}  className='btn1'>Add Student</button>
    </div>
  )
}
