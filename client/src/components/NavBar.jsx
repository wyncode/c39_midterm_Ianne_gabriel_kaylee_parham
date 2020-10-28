import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <ul className="nav">
             <li className="nav-icon"> <Link style={{textDecoration: 'none', color:'white'}}to="/"> PokeCardex </Link>  </li>
             <li><Link style={{textDecoration: 'none', color:'white'}} to="/search">  Home </Link> </li> 
             <li><Link style={{textDecoration: 'none', color:'white'}} to="/about">  About </Link> </li>
            
        </ul>
    )

}

export default NavBar