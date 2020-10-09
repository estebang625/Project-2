import React from 'react'
import { Link } from "react-router-dom";
import './Nav.scss'

function Nav() {
return(  
    <nav>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"></link>
        <i class="fas fa-spider"><Link to='/'>
        Welcome Home!
        </Link>
        
        <Link to='/comicbooks'>
        Spidey Comics!
        </Link></i>
    </nav>
)
    }


export default Nav

// Nav is being taken to the app where it will be rendered in the website in general