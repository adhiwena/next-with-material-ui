import axios from 'axios';

const PostAPI = {
    // get: async () => axios.get(process.env.NEXT_PUBLIC_API_URL + 'posts?_start=0&_limit=5'),
    get: async () => axios.get(process.env.NEXT_PUBLIC_API_URL + '/posts?_start=0&_limit=50'),
}

export default PostAPI
