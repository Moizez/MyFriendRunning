import axios from 'axios'

const api = axios.create({
    baseURL: 'http://money-runners-ws.herokuapp.com',
})

export default api