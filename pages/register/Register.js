import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import MyButton from '../../composants/common/MyButton.js';
import IconSee from '../../assets/icon/Icon_See.png';
import IconNoSee from '../../assets/icon/Icon_NoSee.png';


const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleRegister = () => {
    // Fonction à exécuter lorsque le bouton est pressé  
  };



  return (
    <View style={styles.container}>

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
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#555454"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Pseudonyme"
          placeholderTextColor="#555454"
          value={pseudo}
          onChangeText={setPseudo}
        />

        <Text style={styles.footerText}>Le nom d'utilisateur peut contenir des lettres entre 2 et 16 caractères.</Text>

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
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
            color={toggleCheckBox ? "#FEC200" : undefined}
          />
          <Text style={styles.acceptanceText}>J’accepte les CG et la politique de  confidentialité</Text>
        </View>

        <Text style={styles.footerText}>Pour créer un compte BreakAnime, vous devez accepter les Conditions générales et confirmer que vous avez lu la Politique de confidentialité.</Text>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MyButton text="S'inscrire" onPress={handleRegister} />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.acceptanceText}>
            Vous avez un compte ?   <Text style={{ color: '#F23064', fontFamily: 'Montserrat-Bold' }} onPress={() => navigation.navigate('Login')} >Se connecter</Text>
          </Text>
        </View>
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

export default Register;