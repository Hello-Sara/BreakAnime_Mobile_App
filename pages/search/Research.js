import React, { useEffect, useState, useContext, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, BackHandler, TouchableOpacity } from 'react-native';
import SearchBar from '../../composants/search-nav/SearchNav.js';
import Row from '../../composants/row/Row.js';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";
import { useFocusEffect } from '@react-navigation/native';


// const renderItem = ({ item }) => <Row image={item.picture} title={item.titre} anime={item} />;

const Research = ({navigation}) => {
    const [animeData, setAnimeData] = useState([]);
    const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);
    
    useFocusEffect(
        useCallback(() => {
          const onBackPress = (e) => {
            e.preventDefault();
            setActiveIcon("search");
          };
    
          navigation.addListener('beforeRemove', onBackPress);
    
          return () => navigation.removeListener('beforeRemove', onBackPress);
        }, [navigation])
      );

    const handleSearch = (searchTerm) => {
        fetch(`https://api.breakanime.ninja/api/anime/search?term=${searchTerm}`)
          .then(response => response.json())
          .then(data => {
           // console.log(data); // Affiche les données dans la console
            setAnimeData(data);
          });
      };

    return (
        <View style={styles.container}>
        <View style={styles.searchBarContainer}>
            <SearchBar onSearch={handleSearch} />
        </View>
        <FlatList
            data={animeData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('AnimeDetails', { anime: item, previousPage: 'Research' })}>
                <Row image={item.picture} title={item.titre} anime={item} />
              </TouchableOpacity>
            )}
            windowSize={30}
        />
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
});

export default Research;