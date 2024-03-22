import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Navbar from '../../composants/navigation/Navbar.js';

const Search = () => {
    return (
        <View style={{flex: 1}}>
            <Text>Résultats de recherche pour </Text>
            <ScrollView></ScrollView>
            <View><Navbar/></View>
        </View>
    );
};

export default Search;