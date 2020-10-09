import React from 'react'
import { Link } from "react-router-dom";
import './Nav.scss'

function Nav() {
return(    
    <nav>
        <Link className='L' to='/'>
        Welcome Home!
        </Link>
        <br></br>
        <Link to='/comicbooks'>Spidey Comics!</Link>
    </nav>
)
    }


export default Nav

// Nav is being taken to the app where it will be rendered in the website in general