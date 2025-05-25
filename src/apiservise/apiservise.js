import axios from 'axios';

const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
        maxResults: '50',
    },
    headers: {
        'x-rapidapi-key': 'fd0cd46e02msh2b32daaa63d8cd8p16999cjsnc6d7020fde65',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    }
};

export const ApiServise = {
    async fetching(url) {
        const response = await axios.get(`${base_url}/${url}`, options);
        return response.data;
    }
}
