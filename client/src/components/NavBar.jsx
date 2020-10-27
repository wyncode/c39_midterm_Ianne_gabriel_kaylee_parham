import React from 'react'
import { Link } from 'react-router-dom'
//need to add browser router DOM 
//need to add link tags around the li 

const NavBar = () => {
    return (
        <ul className="nav">
            <Link to="/"> <li className="nav-icon"> PokeCardex </li></Link> 
            <Link to="/about"> <li> About </li></Link>
            <Link to="/searcht"> <li> About </li></Link>
        </ul>
    )

}

export default NavBargit