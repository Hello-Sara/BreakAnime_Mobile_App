import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Details = ({ image, title, episodes, synonyms, genres, animeSeason, status, description }) => {
    return (
        <View >
            <View style={styles.boxContainer}>
                <Image source={{ uri: image }} style={styles.backgroundImage} />
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.gradient}
                >
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{episodes} épisode</Text>
                </LinearGradient>
            </View>
            <Text style={styles.alternativeTitle}>Titre alternatif</Text>
            <Text style={styles.text}>{synonyms}</Text>

            <Text style={styles.alternativeTitle}>Genres</Text>
            <Text style={styles.text}>{genres}</Text>

            <Text style={styles.alternativeTitle}>Saison et année</Text>
            <Text style={styles.text}>{animeSeason}</Text>

            <Text style={styles.alternativeTitle}>Statut</Text>
            <Text style={styles.text}>{status}</Text>

            <Text style={styles.alternativeTitle}>Synopsis</Text>
            <Text style={styles.text}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    boxContainer: {
        width: '100%',
        height: 164,
        backgroundColor: '#FEC200',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 70,
        fontSize: 24,
        fontFamily: 'Nuku', // replace with your font name
        textAlign: 'center',
        color: '#fff',
    },
    subtitle: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium', // replace with your font name
        textAlign: 'center',
        color: '#fff',
        marginTop: 8,   
    },
    text: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium', // replace with your font name
        color: '#fff',
        marginTop: 8,
        marginLeft: 30,    
    },
    alternativeTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold', // replace with your font name
        color: '#F2A007',
        marginTop: 40,
        marginLeft: 30, 
    },
});

export default Details;