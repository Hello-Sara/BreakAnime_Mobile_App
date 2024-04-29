import React, { useContext }  from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Details from '../../composants/details/Details.js';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";

const AnimeDetails = ({ route }) => {
    const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);
    const { anime } = route.params;

    const { picture, titre, episodes, synonyms, genres, animeSeason, status, description } = anime;

    return (
        <ScrollView style={styles.container}>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0B',
    },
});

export default AnimeDetails;