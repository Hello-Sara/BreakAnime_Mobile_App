import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import IconEdit from '../../composants/common/icons/IconEdit.js';

const EditButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { flexDirection: 'row' }]} onPress={onPress}>
      <IconEdit />
      <Text style={styles.text}>MODIFIER</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 85,
    height: 28,
    backgroundColor: 'transparent',
    borderWidth: 0.6,
    borderColor: '#FEC200',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 8,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: 8,
  },
});

export default EditButton;
