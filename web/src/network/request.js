import axios from 'axios'

const http = axios.create({
    baseURL:'http://localhost:3000/web/api',
    timeout:5000
})

export default http