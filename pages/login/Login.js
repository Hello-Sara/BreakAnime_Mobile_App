import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MyButton from '../../composants/common/MyButton.js';
import IconSee from '../../assets/icon/Icon_See.png';
import IconNoSee from '../../assets/icon/Icon_NoSee.png';
import axios from 'axios';


const Login = ({ navigation }) => {
  const [identifier, setIdentifier] = useState(''); // Email or Username
  const [password, setPassword] = useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleLogin = () => {
    axios.post('http://167.99.194.218:3000/api/auth/login', {
      email: identifier, 
      username: identifier,
      password: password,
    })
    .then(response => {
      // // Stockez le token d'authentification pour une utilisation future
      // localStorage.setItem('authToken', response.data.token);
      // // Mettez à jour l'état pour indiquer que l'enregistrement a réussi
      alert('Re-Bonjour !');
      navigation.navigate('Search');
    })
    .catch(error => {
      // Mettez à jour l'état avec le message d'erreur
      if (error.response && error.response.data) {
        console.log(error.response.data.message);
      } else {
        console.log('An error occurred', error);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image style={styles.icon} source={require('../../assets/icon/Icon_BreakAnime.png')} />
        <Text style={styles.titre}>Connectez-vous</Text>
        <Text style={[styles.text, styles.textMargin]}>{`pour explorer vos animes préférés \n et gérer votre progression.`}</Text>
      </View>
      
      <View style={styles.centeredContent}>
        <TextInput
          style={styles.input}
          placeholder="Email ou pseudonyme"
          placeholderTextColor="#555454" // Pour rendre le texte de l'espace réservé #555454
          value={identifier}
          onChangeText={setIdentifier} // Utilisez setIdentifier au lieu de setUsername
        />
        <View style={styles.emptyContainer } >
          <TextInput
            style={styles.inputPass}
            placeholder="Mot de passe"
            placeholderTextColor="#555454"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          /> 
          <TouchableOpacity style={styles.touchableIcon}  onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Image style={styles.iconSee}  source={isPasswordVisible ? IconSee : IconNoSee} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MyButton text="se connecter" onPress={handleLogin} />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.acceptanceText}>
          Vous n’avez pas de compte ?   <Text style={{ color: '#F23064', fontFamily: 'Montserrat-Bold' }} onPress={() => navigation.navigate('Register')} >S’inscrire</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  }, 

  titre: {
    color: '#FEC200',
    fontSize: 36,
    fontFamily: 'Nuku'
  },

  icon: {
    width: 60, // Largeur de l'image
    resizeMode: 'contain', // Assure que l'image est redimensionnée correctement
  },

  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },

  textMargin: {
    marginTop: 16, // Espacement entre le titre et le texte
  },

  input: {
    width: 304,
    height: 45,
    borderColor: 'white',
    borderWidth: 0.6,
    marginBottom: 16, // Augmenter la marge en bas à 16px
    paddingLeft: 8,
    borderRadius: 5, // Pour rendre le rectangle arrondi
    color: 'white', // Pour rendre le texte de l'utilisateur blanc
    backgroundColor: 'transparent', // Pour rendre le fond du champ de saisie transparent
  },

  inputPass: {
    width: 208,
    height: 45,
    color: 'white',
  },

  inputContainer: {
    width: 304,
    height: 45,
    borderColor: 'white',
    borderWidth: 0.6,
    marginBottom: 16, // Augmenter la marge en bas à 16px
    paddingLeft: 8,
    borderRadius: 5, // Pour rendre le rectangle arrondi
    color: 'white', // Pour rendre le texte de l'utilisateur blanc
    backgroundColor: 'transparent', // Pour rendre le fond du champ de saisie transparent
  },

  iconSee: {
    zIndex: 999999,
  },

  touchableIcon: {
    position: 'absolute', 
    right: 0, 
    width: 60, 
    height: 45, 
    display: 'flex', 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: 'transparent',
  },

  emptyContainer: {
    width: 304,
    height: 45,
    borderColor: 'white',
    borderWidth: 0.6,
    marginBottom: 16, // Augmenter la marge en bas à 16px
    paddingLeft: 8,
    borderRadius: 5, // Pour rendre le rectangle arrondi
    backgroundColor: 'transparent', // Pour rendre le fond du champ de saisie transparent
  },

  acceptanceText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#fff',
    marginLeft: 16,
  },
  
  footerText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: '#fff',
    width: 304,
    marginBottom: 16,
  },

  checkbox: {
    alignSelf: "center",
  },

});

export default Login;