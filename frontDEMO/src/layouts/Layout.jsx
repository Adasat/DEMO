import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {CiPower} from 'react-icons/ci'

import './Layout.css'
import CustomHeader from '../components/CustomHeader'


function Layout() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const navigate = useNavigate()

  useEffect(() => {
    
    
  }, [token])

  function onLogout() {
    localStorage.removeItem('token')
    navigate('/')
  }
  
  return (
    <>
      <CustomHeader/>
       {/*  <div id='header'>
          <h1>HEADER</h1>
          {
            localStorage.getItem('token') ? 
              <CiPower id='powerOff' onClick={onLogout}/>
              : null
          }
        </div> */}
        <Outlet />
        <div>FOOTER</div>
    </>
  )
}

export default Layout