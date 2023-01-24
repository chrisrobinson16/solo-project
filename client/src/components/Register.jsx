import React,{ useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate()

const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/register',{
        username,
        email,
        password,
        confirmPassword
    },{withCredentials:true})
    .then((res)=>{
        console.log(res)
        navigate('/form')
    }).catch((err)=>{
        console.log(err)
    })
}

    return(
        <div>
            <form className="col-6 mx-auto" onSubmit={submitHandler}>
                <h1 className='text-warning'>REGISTER</h1>
                <label className="form-label" className='text-danger'>Username:</label>
                <input className="form-control" type="text" onChange={(e)=>setUserName(e.target.value)}/>
                <label className="form-label" className='text-danger'>Email:</label>
                <input className="form-control" type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <label className="form-label" className='text-danger'>Password:</label>
                <input className="form-control" type="text" onChange={(e)=>setPassword(e.target.value)}/>
                <label className="form-label" className='text-danger'>Confirm Password:</label>
                <input className="form-control" type="text" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <button className="btn btn-success mt-3">Register</button>
            </form>
        </div>
    )
}

export default Register