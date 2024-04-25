import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import Navbar from '../../composants/navigation/Navbar.js';
import SearchBar from '../../composants/search-nav/SearchNav.js';
import AnimeCard from '../../composants/cards/AnimeCards.js';

const animeData = [
  { id: '1', image: { uri: "https://cdn.myanimelist.net/images/anime/1361/138919.jpg" } },
  { id: '2', image: { uri: "https://cdn.myanimelist.net/images/anime/1517/113383.jpg" } },
  // Ajoutez plus de données ici
];

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>Tout les animes</Text>
        <FlatList
          data={animeData}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <AnimeCard image={item.image} />
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
      marginTop: 46, // Marge en haut de 46px
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