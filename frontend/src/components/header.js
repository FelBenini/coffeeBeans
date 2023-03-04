import React from 'react'
import { Link } from 'react-router-dom'
import { CiCoffeeCup } from "react-icons/ci"
import { BiMenuAltLeft } from "react-icons/bi"
import IconButton from '@mui/material/IconButton';

const Header = (props) => {
    return (
        <header>
            <nav>
                <IconButton onClick={() => { props.setSideMenu(true) }}><BiMenuAltLeft size='32px' /></IconButton>
            </nav>
            <Link to='/' id='logo'><CiCoffeeCup size='52px' /><h4>Coffee Beans</h4></Link>
            <nav>
                <Link to='login'>Login</Link>
                <Link to='register'>Register</Link>
            </nav>
        </header>
    )
}

export default Header