import axios from 'axios';

const fetcher = async (url) => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + url);
    return data;
}

export default fetcher
