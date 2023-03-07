import React from 'react'
import { Link } from 'react-router-dom'
import { CiCoffeeCup } from "react-icons/ci"
import { BiMenuAltLeft } from "react-icons/bi"
import IconButton from '@mui/material/IconButton';
import { useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

const Header = (props) => {
    const { setUserInfo, userInfo } = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then((response) => {
            response.json().then(user => {
                setUserInfo(user)
            })
        })
    }, [setUserInfo])
    let username = userInfo?.username

    return (
        <header>
            <nav>
                <IconButton onClick={() => { props.setSideMenu(true) }}><BiMenuAltLeft size='32px' /></IconButton>
            </nav>
            <Link to='/' id='logo'><CiCoffeeCup size='52px' /><h4>Coffee Beans</h4></Link>
            <nav>
                {username ? <nav>
                    <Link to='create'>New post</Link>
                    <Link onClick={() => { props.showDialog(true) }}>Logout</Link>
                </nav> : <nav>
                    <Link to='login'>Login</Link>
                    <Link to='register'>Register</Link>
                </nav>}
            </nav>
        </header>
    )
}

export default Header