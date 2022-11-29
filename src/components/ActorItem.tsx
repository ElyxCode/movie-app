import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;

}

export const ActorItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={ styles.container }>
            {
                actor.profile_path && 
                ( 
                    <Image 
                        source={{ uri }}
                        style={{ 
                        width: 50,
                        height:50,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10 }} /> 
                )
            }

            <View style={{ marginLeft: 5, justifyContent: 'center' }}>
                <Text 
                    style={{ fontSize: 16, fontWeight: 'bold' }}>
                        {actor.name}
                </Text>
                <Text 
                    style={{ fontSize: 14, opacity: 0.7 }}>
                        {actor.character}
                </Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#FFF', 
        borderRadius: 10,
        height: 50, 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 6,
        elevation: 3,
        marginRight: 20,
        paddingRight: 10
    }
})