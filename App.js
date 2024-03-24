import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Search from './pages/search/Search';
import Quiz from './pages/quiz/Quiz';
import List from './pages/list/List';
import Account from './pages/account/Account';
import Navbar from './composants/navigation/Navbar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState,useEffect} from 'react';
import * as Font from 'expo-font'; // Importez Font à partir de 'expo-font'
import { ActiveTabProvider } from "./contexts/ActiveTabContext"; 

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Montserrat-Bold': require('./assets/fonts/static/Montserrat-Bold.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/static/Montserrat-SemiBold.ttf'),
      'Montserrat-Medium': require('./assets/fonts/static/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('./assets/fonts/static/Montserrat-Regular.ttf'),
      'Nuku': require('./assets/fonts/nuku1.ttf'),
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
  	loadFonts()
  }, []);
  
  if (!fontsLoaded) {
    return (
      <ActivityIndicator size="large" />

    );
  }
 
  return (
    <ActiveTabProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }} // Cacher la barre d'en-tête pour tous les écrans
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
        <View>
          <Navbar/>
        </View>
      </NavigationContainer>
    </ActiveTabProvider>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.stretch}
        source={require('./assets/img/BG_Bienvenue.png')} />
      <View style={styles.centeredContent}>
        <Image style={styles.icon} source={require('./assets/icon/Icon_BreakAnime.png')} />
        <Text style={styles.titre}>Bienvenue</Text>
        <Text style={[styles.text, styles.textMargin]}>{`Découvrez de nouveaux animes \n et ne vous perdez plus \n dans le suivi des épisodes !`}</Text>
      </View>
      <StatusBar style="auto" />
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.btnText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stretch: {
    width: Dimensions.get('window').width, // largeur de l'écran
    position: 'absolute', // position fixe
    top: 40, // fixée en haut
    height: 418, // hauteur de l'image
    resizeMode: 'cover',
  },

  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 60, // Largeur de l'image
    resizeMode: 'contain', // Assure que l'image est redimensionnée correctement
  },

  titre: {
    color: '#FEC200',
    fontSize: 36,
    fontFamily: 'Nuku'
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

  button: {
    width: 295,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },

  loginButton: {
    position: 'absolute',
    bottom: 141, 
  },
  registerButton: {
    backgroundColor: '#FEC200',
    position: 'absolute',
    bottom: 82,
    borderColor: '#fff', // Couleur du contour
    borderWidth: 0.6, // Épaisseur du contour
  },

  btnText: {
    color: '#0B0B0B',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },

});
