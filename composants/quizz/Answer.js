import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Answer = ({ letter, answer, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected ? styles.cardSelected : null]}
      onPress={onPress}
    >
      <Text style={[styles.letter, isSelected ? styles.textSelected : null]}>{letter}</Text>
      <Text style={[styles.answer, isSelected ? styles.textSelected : null]}>{answer}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 303,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10, 
  },
  cardSelected: {
    backgroundColor: '#FEC200',
    justifyContent: 'flex-start',
  },
  letter: {
    fontFamily: 'Nuku',
    fontSize: 24,
    color: '#FEC200',
    marginRight: 15,
    marginLeft: 10,
  },
  answer: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: '#ffffff',
    marginRight: 20,
  },
  textSelected: {
    color: '#0B0B0B',
  },
});

export default Answer;