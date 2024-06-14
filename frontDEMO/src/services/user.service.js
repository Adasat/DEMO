import { api } from "./config";

export async function getUsers() {
    try {
       const {data} = await api.get('/user', {
         headers: {
           Authorization: localStorage.getItem('token'),
         },
       })

       console.log(data)
       return data
    } catch (error) {
        throw new Error (error)
    }
}