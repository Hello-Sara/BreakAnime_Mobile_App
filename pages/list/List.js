import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Navbar from '../../composants/navigation/Navbar.js';
import Details from '../../composants/details/Details.js';

const List = ({navigation}) => {

    const animeDetails = {
        "id": 4595,
        "titre": "\"Bungaku Shoujo\" Memoire",
        "description": "\"Bungaku Shoujo\" Memoire suit les aventures d'un jeune homme qui rencontre une mystérieuse fille qui dévore littéralement les livres. Ensemble, ils découvrent des secrets enfouis tout en explorant l'univers de la littérature.",
        "picture": "https://cdn.myanimelist.net/images/anime/6/26770.jpg",
        "thumbnail": "https://cdn.myanimelist.net/images/anime/6/26770t.jpg",
        "status": 0,
        "type": 3,
        "episodes": 3,
        "synonyms": [
            {
                "name": "\"文学少女\" メモワール"
            },
            {
                "name": "Book Girl Memories"
            },
            // Les autres synonymes ici...
        ],
        "genres": [
            {
                "name": "primarily female cast",
                "description": null
            },
            // Les autres genres ici...
        ],
        "animeSeason": {
            "id": 224,
            "season": "Inconnu",
            "year": 2010
        }
    };

    const { picture, titre, episodes, synonyms, genres, animeSeason, status, description } = animeDetails;

    return (
        <View style={styles.container}>
            <Details 
                image={picture}
                title={titre}
                episodes={episodes}
                synonyms={synonyms.map(synonym => synonym.name).join(', ')} // Convertir les synonymes en une chaîne de caractères séparée par une virgule
                genres={genres.map(genre => genre.name).join(', ')} // Convertir les genres en une chaîne de caractères séparée par une virgule
                animeSeason={`${animeSeason.season} ${animeSeason.year}`} // Concaténer la saison et l'année
                status={status === 0 ? 'Terminé' : 'En cours'} // Convertir le statut en texte
                description={description}
            />
            {/* <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.text}>Section Liste</Text>
            </ScrollView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0B',
    },
    // scrollView: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // text: {
    //     color: 'white',
    //     fontSize: 20,
    // },
});

export default List;