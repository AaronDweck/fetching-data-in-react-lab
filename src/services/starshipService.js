import axios from 'axios'

export default function starshipService() {
    return axios.get('https://swapi.info/api/starships')
}