import axios from 'axios'


export const pokeApi = axios.create({
    baseURL: 'https://www.pokemon.es',
    timeout: 5000
})

export const rickYMortyApi = axios.create({
  baseURL: 'https://www.ricksanchez.es',
})


export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})
