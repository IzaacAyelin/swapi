import React from 'react';
import {useState} from 'react'
import './MovieCard.css';

export const MovieCard = (props) => {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);

    const like =()=>{
        const favorites  = JSON.parse(localStorage.getItem('favoriteMovies'));
        if (favorites) {
            favorites.push(props.movie)
            localStorage.setItem('favoriteMovies',JSON.stringify(favorites))
        }
        else{
            localStorage.setItem('favoriteMovies',JSON.stringify([props.movie]))
        }
        setIsFavorite(true);
    }
    return (
        <div className="movie-card">
            <div className="movie-card-body">
                <div className="title">
                    <h4>{props.movie.title}</h4>
                    <p>
                        <span>{props.movie.director}</span><br />
                        <span>{props.movie.release_date}</span>
                    </p>
                </div>
                <div className="description">
                    <p>{props.movie.opening_crawl}</p>
                </div>
            </div>
            <div className="movie-card-footer">
            
                {
                    isFavorite && <i className="fas fa-heart liked"></i>
                }
                {
                    !isFavorite && <i onClick={like} className="far fa-heart"></i>
                }
                
            </div>
        </div>
    )
}