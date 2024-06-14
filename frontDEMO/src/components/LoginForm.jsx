import React, { useState } from 'react'
import { login } from '../services/auth.service'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errs, setErrs] = useState('') //Para mostrar si hay algún error
  const navigate = useNavigate()

  async function handleClick(event) {
    event.preventDefault()
    try {
       let response = await login(email, password)
       setErrs('')
       console.log(response.name)
       localStorage.setItem('token', response.token)
       toast.success('Hello World ' + response.name)
       navigate('/')
    } catch (error) {
        setErrs(error.message)
    }
    
  }

  return (
    <>
      <form className='form'>
        <input
          className='email'
          placeholder='Introduce tu email'
          type='email'
          onChange={function (event) {
            setEmail(event.target.value)
          }}
        />

        <input
          placeholder='Introduce tu contraseña'
          type='password'
          onChange={function (event) {
            setPassword(event.target.value)
          }}
        />

        {errs && <p className='error'>{errs}</p>}

        <button onClick={handleClick}>Enviar</button>
      </form>
    </>
  )
}

export default LoginForm