import { useState, useEffect } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';

interface MovieState {
    nowPlaying: Movie[];
    popular: Movie[]
    topRated: Movie[]
    upComing: Movie[]    
}

export const useMovies = () => {
    
    const [ isLoading, setIsLoading ] = useState(true);
    const [movieState, setMovieState] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: []
    });    
    const getMovies = async () => {
                
        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');        
        const popularPromise = movieDB.get<MovieDBResponse>('/popular');        
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');        
        const upComingPromise = movieDB.get<MovieDBResponse>('/upcoming');

        const responses = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upComingPromise
        ]);

        setMovieState({
            nowPlaying: responses[0].data.results,
            popular: responses[1].data.results,
            topRated: responses[2].data.results,
            upComing: responses[3].data.results
        });

        setIsLoading(false);
        
    }

    useEffect(() => {
        getMovies();        
    }, [])
   
    return {
        ...movieState,
        isLoading
    }
    
}
