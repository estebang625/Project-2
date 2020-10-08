import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
return(    
    <nav className='navi'>
            <Link to='/'>
            Welcome Home!
            </Link>
            {/* <h3>The-Spectacular-Spidey-Encycopedia</h3> */}
            <Link to='/ComicBooks'>Spidey Comics!</Link>
        </nav>
)
    }


export default Nav