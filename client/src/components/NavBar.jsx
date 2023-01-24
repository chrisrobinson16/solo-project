import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-dark'>
            <h1 className='text-warning'>Rainbow six seige</h1>
            <NavLink to="">Logout</NavLink>
        </div>
    )
}

export default NavBar