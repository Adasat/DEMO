import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={function(){ navigate('/login')}}>Login</button>
      <button onClick={function(){ navigate('/signup')}}>Signup</button>
    </>
  )
}

export default App