import axios from 'axios';

const EmployeeAPI = {
    // get: () => axios.get(process.env.NEXT_PUBLIC_API_URL + 'posts?_start=0&_limit=5'),
    get: () => axios.get(process.env.NEXT_PUBLIC_API_URL + '/employee'),
}

export default EmployeeAPI
