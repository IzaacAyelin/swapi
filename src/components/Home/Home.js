import React from 'react';
import { useEffect,useState } from 'react';
import { getMoviesApi } from '../../api/swapi/actions'
import './Home.css';
import { MovieCard } from '../Movie-Card/MovieCard';

export const Home = () =>{

    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        getMovies();
    },[])

    const getMovies = async()=>{
        const { data } = await getMoviesApi();
        console.log(data);
        setMovies(data.results)
        
    }
    return (
        <div className="home-container">
            <h1>Movies</h1>
            <div className="movies-container">
                {
                    movies.map((movie)=>{
                        const favorites = JSON.parse(localStorage.getItem('favoriteMovies'))
                        console.log(favorites);
                        
                        let isfavorite; 
                        if (favorites) {
                            const index = favorites.findIndex(x=>x.episode_id===movie.episode_id)
                            console.log(index);
                            
                            if (index>-1) {
                                isfavorite=true
                            }
                            else{
                                isfavorite=false
                            }
                        }
                        console.log(isfavorite);
                        
                        return <MovieCard isFavorite={isfavorite} key={movie.episode_id} movie={movie}/>
                    })
                }
                
            </div>
        </div>
        
    )
}