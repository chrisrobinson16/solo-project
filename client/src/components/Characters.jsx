import React, {useEffect, useState}  from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

const Characters = () => {
    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllCharacters')
        .then((res)=>{
            console.log(res)
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        },[])

    return (
        <div>
            <h1 class='text-danger'>Character list:</h1>
            {
                list.map((character)=>(
                    <div>
                        <Link to={`/onecharacter/${character._id}`}>
                            <h2>{character.name}</h2>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters