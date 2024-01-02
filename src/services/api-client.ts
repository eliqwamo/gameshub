import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '53689621a64a4ef0a344830606c7b39f'
    }
})