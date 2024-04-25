import React, { useState, useContext } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import MyButton from '../../composants/common/MyButton.js';
import IconSee from '../../assets/icon/Icon_See.png';
import IconNoSee from '../../assets/icon/Icon_NoSee.png';
import axios from 'axios';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";


const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [generalConditions, setToggleGeneralConditions] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);

  const handleRegister = () => {
    axios.post('https://api.breakanime.ninja/api/auth/register', {
      name: name,
      email: email, 
      username: username,
      password: password,
    })
    .then(response => {
      console.log('response', response);
      // // Stockez le token d'authentification pour une utilisation future
      //localStorage.setItem('authToken', response.data.token);
      // // Mettez à jour l'état pour indiquer que l'enregistrement a réussi      
      setActiveIcon("search");
      navigation.navigate("Search");
      alert('Bienvenue dans BreakAnime !')
      navigation.navigate('Search');
    })
    .catch(error => {
      // Mettez à jour l'état avec le message d'erreur
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred');
      }
    });
  };

  const ComfirmRegister = () => {
    if (checkForm()) {
      handleRegister();
    }
  }

  const checkForm = () => { 
    return checkUserInfo() && checkPasswords() && checkConditions();
  }

  const checkUserInfo = () => {
    let status = true;

    if(name.length < 1) {
      alert("Le nom ne peux pas être vide");
      status = false;
    }

    if(email.length < 1) {
      alert("L'email ne peux pas être vide");
      status = false;
    }

    if(email.indexOf('@') == -1) {
      alert("L'email n'est pas valide");
      status = false;
    }

    if(email.indexOf('.') == -1) {
      alert("L'email n'est pas valide");
      status = false;
    }

    if(username.length < 1) {
      alert("Le nom d'utilisateur ne peux pas être vide");
      status = false;
    }

    if(username.length < 4 || username.length > 16) {
      alert("Le nom d'utilisateur doit contenir entre 4 et 16 caractères");
      status = false;
    }

    return status;
  }

  const checkPasswords = () => {
    let status = true;
    if(password.length < 1) {
      alert("Le mot de passe ne peux pas être vide");
      status = false;
    } 

    if(confirmPassword.length < 1) {
      alert("Le mot de passe de confirmation ne peux pas être vide");
      status = false;
    }

    if(password.length < 6) {
      alert("Le mot de passe doit contenir au moins 6 caractères");
      status = false;
    }

    if(confirmPassword.length < 6) {
      alert("Le mot de passe de confirmation doit contenir au moins 6 caractères");
      status = false;
    }

    if(password.length > 16) {
      alert("Le mot de passe doit contenir au maximum 16 caractères");
      status = false;
    }

    if(confirmPassword.length > 16) {
      alert("Le mot de passe de confirmation doit contenir au maximum 16 caractères");
      status = false;
    }

    if(password != confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      status = false;
    }

    return status;
  }

  const checkConditions = () =>  {
    if (!generalConditions) {
      alert("Vous devez accepter les conditions générales");
    }
    return generalConditions;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.hero}>
          <Image style={styles.icon} source={require('../../assets/icon/Icon_BreakAnime.png')} />
          <Text style={styles.titre}>Plongez-vous</Text>
          <Text style={[styles.text, styles.textMargin]}>{`dans le monde captivant des animes. \n Créez votre compte dès maintenant.`}</Text>
        </View>
        
        <View style={styles.centeredContent}>
          <TextInput
            style={styles.input}
            placeholder="Prénom"
            placeholderTextColor="#555454" // Pour rendre le texte de l'espace réservé #555454
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#555454"
            value={email}
            type = "email"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Pseudonyme"
            placeholderTextColor="#555454"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.footerText}>Le nom d'utilisateur peut contenir des lettres entre 4 et 16 caractères.</Text>

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

          <View style={styles.emptyContainer }>
            <TextInput
              style={styles.inputPass}
              placeholder="Répétez le mot de passe"
              placeholderTextColor="#555454"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!isConfirmPasswordVisible}
            />
            <TouchableOpacity style={styles.touchableIcon}   onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
              <Image style={styles.iconSee} source={isConfirmPasswordVisible ? IconSee : IconNoSee} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', width: 304, marginBottom: 8 }}>
            <CheckBox
              value={generalConditions}
              onValueChange={(newValue) => setToggleGeneralConditions(newValue)}
              style={styles.checkbox}
              color={generalConditions ? "#FEC200" : undefined}
            />
            <Text style={styles.acceptanceText}>J’accepte les CG et la politique de  confidentialité</Text>
          </View>

          <Text style={styles.footerText}>Pour créer un compte BreakAnime, vous devez accepter les Conditions générales et confirmer que vous avez lu la Politique de confidentialité.</Text>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 16, marginTop: 8 }}>
            <MyButton text="S'inscrire" onPress={ComfirmRegister} />
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.acceptanceText}>
              Vous avez un compte ?   <Text style={{ color: '#F23064', fontFamily: 'Montserrat-Bold' }} onPress={() => navigation.navigate('Login')} >Se connecter</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B0B0B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Register;