import React, { useState, useEffect } from 'react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { IconButton, Button } from '@mui/material'

const RegisterPage = () => {
    const [passVisibility, setPassVisibility] = useState('password')
    const [passIcon, setPassIcon] = useState(<FiEye />)
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [formText, setFormText] = useState('');

    useEffect(() => {
        passVisibility === 'password' ? setPassIcon(<FiEye />) : setPassIcon(<FiEyeOff />)
    }, [passVisibility])

    function togglePass(e) {
        e.preventDefault();
        passVisibility === 'password' ? setPassVisibility('text') : setPassVisibility('password')
    }

    async function registerUser(e) {
        e.preventDefault()
        let response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({email, username, password}),
            headers: {'content-type': 'application/json'}
        })
        if (response.status === 409) {
            setFormText('Could not register, this e-mail was already taken')
        } else if (response.status === 200){
            setFormText('Your account was succesfully registered')
            setUsername('')
            setPassword('')
            setEmail('')
        }
        
    }
    return (
        <section id='registerPage'>
            <h1>Create your Account</h1>
            <form onSubmit={registerUser}>
                <span className='inputWrapper'>
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Type your email' required/>
                </span>
                <span className='inputWrapper'>
                    <input type='text' value={username} name='username' onChange={(e) => setUsername(e.target.value)} placeholder='Choose your username' required/>
                </span>
                <span className='inputWrapper'>
                    <input placeholder='Type your password' value={password} onChange={(e) => setPassword(e.target.value)} type={passVisibility} name='password' required/>
                    <IconButton onClick={togglePass}>
                        {passIcon}
                    </IconButton>
                </span>
                <Button sx={{width: '240px'}} type='submit' variant='contained'>Register</Button>
                <p className='pAlert'>{formText}</p>
            </form>
        </section>
    )
}
export default RegisterPage