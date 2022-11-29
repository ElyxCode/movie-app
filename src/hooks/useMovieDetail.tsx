import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsRespose } from '../interfaces/creditsInterface';


interface MovieDetails {
    isLoading: boolean,
    movie?: MovieFull,
    cast: Cast[]
}
export const useMovieDetail = ( movieId: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movie: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsRespose>(`/${movieId}/credits`);
        
        const [ movieDetailsResponse, castResponse ] = await Promise.all([ movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movie: movieDetailsResponse.data,
            cast: castResponse.data.cast 
        });
    }
    
    useEffect(() => {
        getMovieDetails();
        
    }, []);

    return {
        ...state
    }
}
    
