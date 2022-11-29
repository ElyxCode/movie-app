import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a94404fd7f70e0f709be7d02863d7551',
        language: 'es-ES'
    }
});

export default movieDB;