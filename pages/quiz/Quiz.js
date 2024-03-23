import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Navbar from '../../composants/navigation/Navbar.js';

const Quiz = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.text}>Section Quiz</Text>
        </ScrollView>
        <View>
            <Navbar navigation={navigation} />
        </View>
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

export default Quiz;