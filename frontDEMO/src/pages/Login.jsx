import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

function Login() {
  const [pass, setPass] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <LoginForm />
      <button
        onClick={function () {
          navigate('/')
        }}
      >
        VOLVER A HOME
      </button>
      <button
        onClick={function () {
          navigate('/user')
        }}
      >
        USERS
      </button>

      <div className='user-box'>
        <input
          type={isVisible ? 'text' : 'password'}
          value={pass}
          id='password'
          required={true}
          onChange={function (e) {
            setPass(e.target.value)
          }}
        />

        {

          isVisible ?
          <BsEye
            className='iconEye'
            onClick={function () {
              setIsVisible(false)
            }}
          />

          :

          <BsEyeSlash
            className='iconEye'
            onClick={function () {
              setIsVisible(true)
            }}
          />


        }


      </div>
    </>
  )
}

export default Login