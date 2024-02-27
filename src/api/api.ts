import axios from 'axios'

export default axios.create({baseURL: process.env.REACT_APP_API_URL || "http://35.198.87.180:8081/api/" })
