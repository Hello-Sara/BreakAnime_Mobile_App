import React,  { useContext, useState, useEffect }  from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MyButton from '../../composants/common/MyButton.js';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimeCard from '../../composants/cards/AnimeCards';
import axios from 'axios';

const Quiz = ({navigation}) => {
  const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);
  const [recommandations, setRecommandations] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('userId').then((id) => {
      axios.get(`https://api.breakanime.ninja/api/recommendation/${id}`)
      .then(response => response.data)
      .then(data => setRecommandations(data));
    });
    
  }, []);

    return (
      <View style={styles.container}>
        <View style={styles.button}>
        <MyButton text="Faire un quiz" onPress={() => { setActiveIcon('Mcq'); navigation.navigate('Mcq'); }  } />
        </View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.text}>Ancien résultat</Text>

        <FlatList
          data={recommandations}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => {
                console.log('item', item);
                  axios.get(`https://api.breakanime.ninja/api/animes/${item.anime_id}`).then((response) => {
                    setActiveIcon("AnimeDetails");
                    navigation.navigate('AnimeDetails', { anime: response.data, previousPage: 'Quiz' });
                  });
              }}>
                <AnimeCard image={{uri: item.anime.picture}} />
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
    button: {
      alignSelf: 'center',
      marginTop: 100,
    },
    scrollView: {
      flex: 1,
      paddingTop: 24, 
      marginHorizontal: 40, 
  },
  text: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'flex-start', 
  },
  cardContainer: {
    marginTop: 16, 
    marginRight: 12,
    alignContent: 'center',
},
});

export default Quiz;