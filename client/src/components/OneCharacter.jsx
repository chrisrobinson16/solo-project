import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const OneCharacter = () => {

const [character,setCharacter] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/onecharacter/${id}`)
        .then((res)=>{
            setCharacter(res.data)
        }).catch((err)=>{
            console.log(err)
    })
    },[])

    const deleteHandler = () => {
        axios.delete(`http://127.0.0.1:8000/api/deletecharacter/${id}`)
        .then((res)=>{
            navigate('/Characters')
        }).catch((err)=>{
            console.log(err)
    })
    }


    return (
        <div>
            <h1 class='text-danger'>Character Info!!!</h1>
            <h2>{character.name}</h2>
            <h2>{character.skill}</h2>
            <Link to={`/editcharacter/${character._id}`}>Edit Character</Link> <br></br>
            <button className="btn btn-danger mt-3" onClick={(e)=>{deleteHandler()}}>Delete Character</button>
        </div>
    )

}

export default OneCharacter