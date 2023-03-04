import React from 'react'
import { Link } from 'react-router-dom'
import { CiCoffeeCup } from "react-icons/ci"
import { BiMenuAltLeft } from "react-icons/bi"
import IconButton from '@mui/material/IconButton';

const Header = (props) => {
  return (
    <header>
        <IconButton onClick={() => {props.setSideMenu(true)}}><BiMenuAltLeft/></IconButton>
            <Link to='/' id='logo'><CiCoffeeCup size='52px'/><h4>Coffee Beans</h4></Link>
        <span>a</span>
    </header>
  )
}

export default Header