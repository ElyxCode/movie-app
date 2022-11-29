import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, View, Dimensions, ScrollView, Text, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigation';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ({ route, navigation }: Props) => {
    
    const currentMovie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`;

    const { isLoading, movie, cast } = useMovieDetail(currentMovie.id);

    return (
        <ScrollView>
            <View style={ styles.imageContainer }>
                <View style={ styles.imageBorder }>
                    <Image 
                        source={{ uri }}
                        style={ styles.posterImage } />
                </View>                
            </View>
            <View style={ styles.marginConteiner }>
                <Text style={styles.subtitle}>{currentMovie.original_title}</Text>
                <Text style={styles.title}>{currentMovie.title}</Text>
            </View>
            
            {
                isLoading 
                    ? <ActivityIndicator size={30} color='#6200EE' style={{ marginTop: 20 }} /> 
                    : <MovieDetails movieFull={movie!} cast={cast}/>
            }

            {/* Boton de cerrar */}
            <View style={ styles.backButton }>
                <TouchableOpacity style={{ opacity: 0.7 }} onPress={() => navigation.goBack() }>
                    <Icon
                        color='#FFF'
                        name='arrow-back-outline'
                        size={40}
                    />
                </TouchableOpacity>
            </View>

        </ScrollView>        
    )
}


const styles = StyleSheet.create({
    posterImage: {
        flex: 1        
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.8,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 8,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25         
    },
    marginConteiner: {
        marginHorizontal: 20,
        marginTop: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        opacity: 0.8        
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    backButton: {
        position: 'absolute',
        elevation: 9,
        top: 10,
        left: 5
    }
})