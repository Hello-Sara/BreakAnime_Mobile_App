import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import MyButton from '../../composants/common/MyButton.js';
import EditButton from '../../composants/common/EditButton.js';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";




const Account = ({navigation}) => {
  const [user, setUser] = useState(null);
  const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);

  // useEffect(() => {
  //     axios.get('URL_DE_VOTRE_API')
  //         .then(response => setUser(response.data))
  //         .catch(error => console.error(error));
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.backgroundImage} source={require('../../assets/img/BG_Compte.png')} />
        <Image style={styles.profileImage} source={require('../../assets/img/Profil.png')} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>Name</Text>
        <View style={{marginTop: 32, alignItems: 'center', marginBottom: 32 }}>
          <Text style={[styles.text, {marginBottom: 8}]}>Email</Text>
          <Text style={styles.text}>Username</Text>
        </View>
        <EditButton onPress={() => navigation.navigate('EditAccount')}/>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        <MyButton 
          text="Se déconnecter" 
          // onPress={() => navigation.navigate('Home')}
          onPress={() => {
            // Reset the navigation state
            setActiveIcon("Login");
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          }}
        />
      </ScrollView>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },
  imgContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  infoContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 90,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: 200,  
  },
  profileImage: {
    position: 'absolute',
    top: 135,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium'
  },
  nameText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Nuku'
  },
});

export default Account;