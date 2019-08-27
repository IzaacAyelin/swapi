import axios from 'axios';

export const getMoviesApi = () =>{
    return axios.get('https://swapi.co/api/films/');
}