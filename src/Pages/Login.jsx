import React, { useState } from 'react'
import './Login.css'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { loginUser } from '../Api/api'
import { setUserToken } from '../Auth/AuthLocalStorage'
import { Button, TextField, makeStyles } from '@mui/material'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const { setIsVerified, setShouldRefresh, user, setUserInfo } = useOutletContext()
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setShouldRefresh(true)
    const data = {
        email,
        password
    }
    const loginResult = await loginUser(data)
    console.log(loginResult)
    if (loginResult) {
        setIsVerified(true)
        setUserToken(loginResult.token)
        // setUserInfo(currentUser(user))
        navigate('/')
    }
    setShouldRefresh(false)
  }
  

  return (
    <div style={{ color: '#FFFFFF'}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} class="flex justify-center items-center pt-40 text-xl">
            <label>
                Email:{" "}
                <input class="rounded-xl bg-gray-600 outline-none px-4 text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label class="pl-6">
                Password:{" "}
                <input class="rounded-xl bg-gray-600 outline-none px-4 text-white" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button class="btn" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login