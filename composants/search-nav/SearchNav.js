import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import IconSearch from '../../composants/common/icons/IconSearchY.js';

const SearchBar = ({ onFocus, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query); // Appelle la fonction onSearch passée en prop avec le terme de recherche
  };

  const submitSearch = () => {
    onSearch(searchQuery); // Appelle la fonction onSearch passée en prop avec le terme de recherche
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Rechercher des titres"
          placeholderTextColor="#858585"
          value={searchQuery}
          onChangeText={handleSearch}
          onFocus={onFocus}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={submitSearch}>
          <IconSearch color="#F2A007" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0B0B0B',
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', // Centrer la barre de recherche
    },
    inputContainer: {
      width: 330, // Largeur fixe de 303
      height: 43,
      borderColor: '#F2A007',
      borderWidth: 1,
      borderRadius: 30,
      paddingLeft: 25,
      backgroundColor: '#0B0B0B',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      color: '#fff',
      flex: 1,
      maxWidth: 240,
    },
    iconContainer: {
      position: 'absolute',
      right: 15,
    },
  });

export default SearchBar;