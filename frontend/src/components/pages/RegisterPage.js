import React, { useState, useEffect } from 'react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { IconButton, Button } from '@mui/material'
import axios from 'axios';

const RegisterPage = () => {
    const [passVisibility, setPassVisibility] = useState('password')
    const [passIcon, setPassIcon] = useState(<FiEye />)
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();

    useEffect(() => {
        passVisibility === 'password' ? setPassIcon(<FiEye />) : setPassIcon(<FiEyeOff />)
    }, [passVisibility])

    function togglePass(e) {
        e.preventDefault();
        passVisibility === 'password' ? setPassVisibility('text') : setPassVisibility('password')
    }

    async function call() {
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({email, username, password}),
            headers: {'content-type': 'application/json'}
        })
    }
    return (
        <section id='registerPage'>
            <h1>Create your Account</h1>
            <form>
                <span className='inputWrapper'>
                    <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Type your email' required/>
                </span>
                <span className='inputWrapper'>
                    <input type='text' name='username' onChange={(e) => setUsername(e.target.value)} placeholder='Choose your username' required/>
                </span>
                <span className='inputWrapper'>
                    <input placeholder='Type your password' onChange={(e) => setPassword(e.target.value)} type={passVisibility} name='password' required/>
                    <IconButton onClick={togglePass}>
                        {passIcon}
                    </IconButton>
                </span>
                <Button onClick={call} variant='contained' type='submit'>Register</Button>
            </form>
        </section>
    )
}
export default RegisterPage