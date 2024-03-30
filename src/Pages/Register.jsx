import axios from 'axios'
import React, { useState } from 'react'
import { registerUser } from '../Api/api'
import { useNavigate } from 'react-router-dom'
import { Alert } from '@mui/material'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
      e.preventDefault()
      const data = {
        firstName,
        lastName,
        email,
        password
      }
      const registerResult = await registerUser(data)
      console.log(registerResult)
      
      return registerResult.success ? navigate("/login") : alert('Error Registering User!')
  }
  return (
    <div class="">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} class="flex flex-col justify-items-center items-center pt-40 text-xl">
            <label>
                First Name:{" "}
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} class="rounded-xl bg-gray-600 outline-none px-4 text-white" />
            </label>
            <label class="mt-8">
              Last Name:{" "}
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} class="rounded-xl bg-gray-600 outline-none px-4" />
            </label>
            <label class="ml-12 mt-8">
                Email:{" "}
                <input value={email} onChange={(e) => setEmail(e.target.value)} class="rounded-xl bg-gray-600 outline-none px-4" />
            </label>
            <label class="mt-8">
                Password:{" "}
                <input value={password} onChange={(e) => setPassword(e.target.value)} class="rounded-xl bg-gray-600 outline-none px-4" />
            </label>
            <button class="btn">Submit</button>
        </form>
    </div>
  )
}

export default Register