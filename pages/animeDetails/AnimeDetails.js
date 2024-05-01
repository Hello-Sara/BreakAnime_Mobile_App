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
                synonyms={synonyms ? synonyms.map(synonym => synonym.name).join(', ') : ''} // Vérifier si synonyms existe
                genres={genres ? genres.map(genre => genre.name).join(', ') : ''} // Vérifier si genres existe
                animeSeason={animeSeason ? `${animeSeason.season} ${animeSeason.year}` : ''} // Vérifier si animeSeason existe
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