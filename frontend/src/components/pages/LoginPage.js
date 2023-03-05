import React, { useState, useEffect } from 'react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { IconButton, Button } from '@mui/material'

const LoginPage = () => {
    const [passVisibility, setPassVisibility] = useState('password')
    const [passIcon, setPassIcon] = useState(<FiEye />)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        passVisibility === 'password' ? setPassIcon(<FiEye />) : setPassIcon(<FiEyeOff />)
    }, [passVisibility])

    function togglePass(e) {
        e.preventDefault();
        passVisibility === 'password' ? setPassVisibility('text') : setPassVisibility('password')
    }

    async function login(e) {
        e.preventDefault()
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-type': 'application/json'} 
        })
    }
    return (
        <section id='loginPage'>
            <h1>Login</h1>
            <form onSubmit={login}>
                <span className='inputWrapper'>
                    <input type='text' value={username} onChange={(e) => {
                        setUsername(e.target.value)}} name='username' placeholder='Type your username' required/>
                </span>
                <span className='inputWrapper'>
                    <input placeholder='Type your password' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} type={passVisibility} name='password' required/>
                    <IconButton onClick={togglePass}>
                        {passIcon}
                    </IconButton>
                </span>
                <Button type='submit' variant='contained'>Login</Button>
            </form>
        </section>
    )
}

export default LoginPage