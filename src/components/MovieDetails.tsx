import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { ActorItem } from './ActorItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* Movie Details */}
                <Icon name='star-outline' color='grey' size={16} />
                <Text style={{ fontSize: 16, marginLeft: 5 }}>{movieFull.vote_average}</Text>
                <Text style={{ marginLeft: 5, fontSize: 15 }}>
                    - { movieFull.genres.map(genre => genre.name).join(', ')} 
                </Text>                 
            </View>
                {/* Movie Story */}
                <Text 
                    style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>
                        Historia
                </Text>
                <Text 
                    style={{ fontSize: 16 }}>
                        { movieFull.overview ? movieFull.overview : 'Información no disponible' }
                </Text>

                {/* Movie Budget */}
                <Text 
                    style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>
                        Presupuesto
                </Text>
                <Text 
                    style={{ fontSize: 16 }}>
                        { movieFull.budget ? currencyFormatter.format(movieFull.budget, { code: 'USD' }) : 'Información no disponible' }
                </Text>
                
            {/* Movie Casting */}
            <View style={{ marginTop: 5, marginBottom: 10 }}>
                <Text 
                    style={{ fontSize: 18, marginTop: 10, marginBottom: 3, fontWeight: 'bold' }}>
                        Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <ActorItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 80 }} />                
            </View>
        </View>
    )
}
