import axios from 'axios';

const PIXABAY_API_KEY = "27643895-f6cbf0652fd699c6e124c20c0";

async function getImagePixabay(query, page) {

    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${PIXABAY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    const response = await axios.get(url);
    return response.data;
}

export default getImagePixabay;