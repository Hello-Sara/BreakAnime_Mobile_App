import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet,  TouchableOpacity, FlatList, Row  } from 'react-native';
import AnimeCard from '../../composants/cards/AnimeCards';
import axios from 'axios';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";

const Recommendation = ({route, navigation}) => {
  
  const { tags, id } = route.params; // Assurez-vous que 'id' est passé correctement à ce composant
  const [animeData, setAnimeData] = useState([]);
  const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        console.log('tags', tags);
          const genreList = tags.join(','); // Convertit le tableau de tags en une chaîne séparée par des virgules
          console.log('id', id);
          console.log('genreList', genreList);
          const response = await axios.post(`https://api.breakanime.ninja/api/recommendation/${id}`, {
              genreList: genreList.toString(), // Convertit le tableau de tags en une chaîne séparée par des virgules
          })
          console.log('response', response.data)
          console.log('anime count', response.data.length)
          setAnimeData(response.data); // Supposons que l'API renvoie directement la liste des anime
      } catch (error) {
          console.error("Erreur lors de la récupération des recommandations :", error);
      }
    };

    fetchRecommendations();
  }, [tags, id]); // Refaire la requête si les tags ou l'id changent


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.backButton}>
          <Text style={styles.backButtonText}>Retour</Text>
      </TouchableOpacity>
      <Text style={styles.quizText}>Resultat</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
          <FlatList
              data={animeData}
              renderItem={({ item }) => (
                  <View style={styles.cardContainer}>
                    <TouchableOpacity onPress={() => {                                       
                        axios.get(`https://api.breakanime.ninja/api/animes/${item.id}`).then((response) => {
                          console.log('response', response);
                          setActiveIcon("AnimeDetails");
                          navigation.navigate('AnimeDetails', { anime: response.data, previousPage: 'Recommendation'});
                        });                        
                      }}>
                    <AnimeCard image={{uri: item.picture}} />
                    <Text style={{color: 'white', textAlign: 'center'}}>{item.score + '%'}</Text>
                  </TouchableOpacity>
                  </View>
              )}
              keyExtractor={item => item.id.toString()}
              numColumns={3} 
          />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#0B0B0B',
    },
    backButton: {
        alignSelf: 'flex-end',
        marginRight: 25,
        marginTop: 35,
    },
    backButtonText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#FFFFFF',
    },
    quizText: {
        fontFamily: 'Nuku',
        fontSize: 24,
        color: '#FEC200',
        marginTop: 10,
        alignSelf: 'center',
    },
    scrollView: {
      flex: 1,
      paddingTop: 24, // Ajouter un padding en haut de 24px
      marginHorizontal: 40, // Ajouter une marge latérale de 40px
  },
    cardContainer: {
        marginTop: 16, 
        marginRight: 12,
        alignContent: 'center',
    },
});

export default Recommendation;