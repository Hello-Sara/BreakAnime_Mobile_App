import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Navbar from '../../composants/navigation/Navbar.js';
import MyButton from '../../composants/common/MyButton.js';

const Quiz = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
        <MyButton text="Faire un quiz" />
        </View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.text}>Ancien résultat</Text>
        {/* <FlatList
          data={animeData}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => {
                  setActiveIcon("AnimeDetails");
                  navigation.navigate('AnimeDetails', { anime: item }
                );
              }}>
                <AnimeCard image={{uri: item.picture}} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={3} // Afficher 3 cartes par ligne
        /> */}
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
});

export default Quiz;