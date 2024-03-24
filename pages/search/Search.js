import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Navbar from '../../composants/navigation/Navbar.js';

const Search = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.text}>Section Recherche</Text>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0B',
    },
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});

export default Search;