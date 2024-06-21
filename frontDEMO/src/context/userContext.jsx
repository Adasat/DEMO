import { getMyProfileContext } from "../services/user.service"

import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext('user')



function ContextWrapper({children}) {
  const [user, setUser] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token') // Asume que el token está almacenado bajo la clave 'token'
      if (token) {
        try {
          const response = await getMyProfileContext()
          setUser(response)
        } catch (error) {
          console.error('Error fetching profile:', error)
          // Manejar error, tal vez limpiando el token inválido del localStorage
          localStorage.removeItem('token')
        }
      }
    }

    fetchProfile()
  }, [])

  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export default ContextWrapper