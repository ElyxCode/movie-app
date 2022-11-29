import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

export const MoviePosterCard = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const navigation = useNavigation<StackNavigationProp<any,any>>();
    
    return (
        <TouchableOpacity 
            style={{ 
                width, 
                height, 
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
             }}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('DetailScreen', movie)}>
            <View style={ Styles.imageContainer }>
                <Image source={{ uri }} style={ Styles.image }></Image>
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18        
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        marginTop: 10 
    }
});

