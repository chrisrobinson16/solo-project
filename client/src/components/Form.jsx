import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Form = () => {
    const[name,setName] = useState('')
    const[skill,setSkill] = useState('')

    const [errors,setErrors] = useState({})

const navigate = useNavigate()


    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/createCharacter',{
            name,
            skill
        }).then((res)=>{
            console.log(res)
            navigate('/characters')
        }).catch((err)=>{
            console.log(err)
            console.log("error si caught on front-end")
            setErrors(err.response.data.errors)
        })
    
    }




    return (
        <div className="col-6 mx-auto" >
            <h1 className='text-warning'>Create siege Character:</h1>
            <form onSubmit={submitHandler}>
                <label className="form-label" className='text-danger'>Name:</label>
                <input type="text-danger" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                {errors.name ? <span className="text-danger">{errors.name.message}</span> : null} <br></br>
                <label className="form-label" className='text-danger'>Skill:</label>
                <input type="text" className="form-control" onChange={(e)=>setSkill(e.target.value)} />
                {errors.skill ? <span className="text-danger">{errors.skill.message}</span> : null}<br></br>
                <button className= "btn btn-success mt-3" >Submit</button>
            </form>
        </div>
    )
}

export default Form