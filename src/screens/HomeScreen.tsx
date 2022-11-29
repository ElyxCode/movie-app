
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, Text, View, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MoviePosterCard } from '../components/MoviePosterCard';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradientContext)

    const getPosterColors = async ( index: number ) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [ primaryColor = 'green', secundaryColor = 'orange' ] = await getImageColors(uri);
        setMainColors({ primary: primaryColor, secundary: secundaryColor });      
    }

    useEffect(() => {
        if(nowPlaying.length > 0) {
            getPosterColors(0)
        }    
    }, [nowPlaying])

    if(isLoading){
        return (
            <ActiveLoading /> 
        )       
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top }}>
                
                    {/* Carousel principal */}
                    <View style={{ height: 440 }}>
                        <Carousel 
                            data={ nowPlaying } 
                            renderItem={ ({ item }: any) => <MoviePosterCard movie={item} /> } 
                            sliderWidth={ windowWidth }
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ index => getPosterColors(index)} />
                    </View>

                    {/* Carousel Populares */}
                    <HorizontalSlider title='Popular' movies={ popular } />
                    <HorizontalSlider title='Top Rated' movies={ topRated } />
                    <HorizontalSlider title='Up Coming' movies={ upComing } />
                </View>
            </ScrollView>  
        </GradientBackground>
              
    )
}

const ActiveLoading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <ActivityIndicator color='#6200EE' size={50} />
        </View>
    )
}
