import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom'

const UpdateForm = () => {
    const[name,setName] = useState('')
    const[skill,setSkill] = useState('')

    const [errors,setErrors] = useState({})


    const [character,setCharacter] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/onecharacter/${id}`)
        .then((res)=>{
            console.log(res)
            setName(res.data.name)
            setSkill(res.data.skill)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updatecharacter/${id}`,{
            name,
            skill
        })
        .then((res)=>{
            console.log(res)
            navigate('/characters')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })

}

    return (
        <div className='col-6 mx-auto'>
            <h1 class='text-danger'>Edit Character:</h1>
            <form onSubmit={submitHandler}>
                <label className="form-label" className='text-danger'>Name:</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                {errors.name ? <span className="text-danger">{errors.name.message}</span> : null} <br></br>
                <label className="form-label" className='text-danger'>Skill:</label>
                <input type="text" className="form-control" value={skill} onChange={(e)=>setSkill(e.target.value)} />
                {errors.skill ? <span className="text-danger">{errors.skill.message}</span> : null}<br></br>
                <button className= "btn btn-success mt-3" >Submit</button>
            </form>
        </div>
    )
}

export default UpdateForm