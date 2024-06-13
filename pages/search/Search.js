import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, BackHandler } from 'react-native';
import Navbar from '../../composants/navigation/Navbar.js';
import SearchBar from '../../composants/search-nav/SearchNav.js';
import AnimeCard from '../../composants/cards/AnimeCards.js';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";
import axios from 'axios';


const Search = ({navigation}) => {
  const [animeData, setAnimeData] = useState([]);
  const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);
  const [unsubscribe, setUnsubscribe] = useState(null);
  
  useEffect(() => {
    axios.get('https://api.breakanime.ninja/api/animes')
      .then(response => response.data)
      .then(data => setAnimeData(data));
  }, []);


  useEffect(() => {
    const onBackPress = () => {
      // Handle back button press
      return true; // Prevent default action
    };
  
    // Add listener when the page is focused
    const focusUnsubscribe = navigation.addListener('focus', () => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      setUnsubscribe(() => backHandler.remove);
    });
  
    // Add listener when the page loses focus
    const blurUnsubscribe = navigation.addListener('blur', () => {
      if (unsubscribe) unsubscribe();
    });
  
    // Cleanup
    return () => {
      focusUnsubscribe();
      blurUnsubscribe();
      if (unsubscribe) unsubscribe();
    };
  }, [navigation, unsubscribe]);


  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar onFocus={() => {
          navigation.navigate('Research')
          setActiveIcon("Research");
        }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>Tout les animes</Text>
        <FlatList
          data={animeData}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => {
                  setActiveIcon("AnimeDetails");              
                  navigation.navigate('AnimeDetails', { anime: item, previousPage: 'Search' }
                );
              }}>
                <AnimeCard image={{uri: item.picture}} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={3} // Afficher 3 cartes par ligne
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#0B0B0B',
  },
  searchBarContainer: {
      marginTop: 50, // Marge en haut de 46px
  },
  scrollView: {
      flex: 1,
      paddingTop: 24, // Ajouter un padding en haut de 24px
      marginHorizontal: 40, // Ajouter une marge latérale de 40px
  },
  text: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'flex-start', // Aligner le texte à gauche
  },
  cardContainer: {
      marginTop: 16, // Ajouter une marge en haut de 16px
      marginRight: 12, // Ajouter une marge de 12px sur tous les côtés
  },
});

export default Search;