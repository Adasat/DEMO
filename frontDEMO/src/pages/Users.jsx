import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../services/user.service'
import UserCard from '../components/UserCard'
import { UserContext } from '../context/userContext'

function Users() {
    const [users, setUsers] = useState([])
    const {user} = useContext(UserContext)

    useEffect(function(){
        async function getAllUsers(){
            let response = await getUsers()
            setUsers(response)
        }
        getAllUsers()

    },[])

    console.log(user)



  return (
    <div>
        {users?.map(function(user, indice){
            return (
                
                <UserCard key={indice} user={user} />

            )
        })}
    </div>
  )
}

export default Users