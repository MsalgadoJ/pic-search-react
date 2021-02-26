import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 86Q8CUFWNWuT5rExMiodf0xfU1ITrqM07UWGfu6zr8Y'
    }
});