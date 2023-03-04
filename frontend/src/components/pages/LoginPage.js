import React, { useState, useEffect } from 'react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { IconButton, Button } from '@mui/material'

const LoginPage = () => {
    const [passVisibility, setPassVisibility] = useState('password')
    const [passIcon, setPassIcon] = useState(<FiEye />)

    useEffect(() => {
        passVisibility === 'password' ? setPassIcon(<FiEye />) : setPassIcon(<FiEyeOff />)
    }, [passVisibility])

    function togglePass(e) {
        e.preventDefault();
        passVisibility === 'password' ? setPassVisibility('text') : setPassVisibility('password')
    }
    return (
        <section id='loginPage'>
            <h1>Login</h1>
            <form>
                <span className='inputWrapper'>
                    <input type='text' name='username' placeholder='Type your username' required/>
                </span>
                <span className='inputWrapper'>
                    <input placeholder='Type your password' type={passVisibility} name='password' required/>
                    <IconButton onClick={togglePass}>
                        {passIcon}
                    </IconButton>
                </span>
                <Button variant='contained'>Login</Button>
            </form>
        </section>
    )
}

export default LoginPage