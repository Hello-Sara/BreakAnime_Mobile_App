import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const AnimeCard = ({ image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 100, // Largeur de 89
        height: 142, // Hauteur de 126
        backgroundColor: '#FEC200', // Couleur de fond par défaut
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    image: {
        width: '100%', // L'image prend toute la largeur de la carte
        height: '100%', // L'image prend toute la hauteur de la carte
        resizeMode: 'cover', // L'image couvre toute la surface de la carte
        borderRadius: 5,
    },
});

export default AnimeCard;