import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import MyButton from '../../composants/common/MyButton.js';
import EditButton from '../../composants/common/EditButton.js';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Account = ({navigation}) => {
  const [user, setUser] = useState(null);
  const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);

  useEffect(() => {
    const fetchData = async () => {
      const userId = 4; // Replace with the user ID
      const token = await AsyncStorage.getItem('authToken');
      if(token) {
        try {
          let response = await axios.get(`https://api.breakanime.ninja/api/resource/user/${userId}` , { headers: { 'Authorization ': token } })
          if(response.data) {
            setUser(response.data)  
          } else {
            console.log('Connection error');
            console.log(response); 
          }
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.backgroundImage} source={require('../../assets/img/BG_Compte.png')} />
        <Image style={styles.profileImage} source={require('../../assets/img/Profil.png')} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{user?.name}</Text>
        <View style={{marginTop: 32, alignItems: 'center', marginBottom: 32 }}>
          <Text style={[styles.text, {marginBottom: 8}]}>{user?.email}</Text>
          <Text style={styles.text}>{user?.username}</Text>
        </View>
        <EditButton onPress={() => navigation.navigate('EditAccount')}/>
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#F2A007', width: '100%' }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={styles.columnContainer}>
            <Text style={styles.textPrincipal}>3</Text>
            <Text style={styles.legend}>Déjà-vus</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.columnContainer}>
            <Text style={styles.textPrincipal}>2</Text>
            <Text style={styles.legend}>En cours</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.columnContainer}>
            <Text style={styles.textPrincipal}>50</Text>
            <Text style={styles.legend}>Dans la liste</Text>
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#F2A007', width: '100%' }} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        <MyButton 
          text="Déconnexion" 
          // onPress={() => navigation.navigate('Home')}
          onPress={async () => {
            // Reset the navigation state
            setActiveIcon("Login");
            await AsyncStorage.removeItem('authToken');
            navigation.navigate('Login');
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
  textPrincipal: {
    fontFamily: 'Nuku',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 41,
    textAlign: 'center',
    color: '#FEC200',
  },
  legend: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  columnContainer: {
    alignItems: 'center',
    margin: 20,
  },
  verticalLine: {
    height: 38,
    borderLeftWidth: 1,
    borderLeftColor: '#F2A007',
    marginHorizontal: 10, // Ajoute une marge à gauche et à droite
  },
});

export default Account;