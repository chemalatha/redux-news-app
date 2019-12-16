import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <header>
            <Link to='/'>Redux News App</Link>
        </header>
    )
}

export default Header;