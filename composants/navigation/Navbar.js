import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IconSearch from '../../composants/common/icons/IconSearch.js';
import IconAccount from '../../composants/common/icons/IconAccount.js';
import IconList from '../../composants/common/icons/IconList.js';
import IconQuizz from '../../composants/common/icons/IconQuizz.js';
import { useNavigation } from '@react-navigation/native';
import ActiveTabContext from "../../contexts/ActiveTabContext.js";


const Navbar = () => {
  const navigation = useNavigation();
  const { activeIcon, setActiveIcon } = useContext(ActiveTabContext);
  if (
    activeIcon === "Register" ||
    activeIcon === "Login" ||
    activeIcon === "Home"
  )
    return null;
  
  return (
      <View style={styles.navbar}>
        <View style={styles.navItem}>
          <TouchableOpacity
            style={styles.navItemContent}
            onPress={() => {
              setActiveIcon("search");
              navigation.navigate("Search");
            }}
          >
            <IconSearch active={activeIcon === "search"} />
            <Text
              style={[
                styles.navText,
                { color: activeIcon === "search" ? "white" : "grey" },
              ]}
            >
              Recherche
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <TouchableOpacity
            style={styles.navItemContent}
            onPress={() => {
              setActiveIcon("quizz");
              navigation.navigate("Quiz");
            }}
          >
            <IconQuizz active={activeIcon === "quizz"} />
            <Text
              style={[
                styles.navText,
                { color: activeIcon === "quizz" ? "white" : "grey" },
              ]}
            >
              Quiz
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <TouchableOpacity
            style={styles.navItemContent}
            onPress={() => {
              setActiveIcon("list");
              navigation.navigate("List");
            }}
          >
            <IconList active={activeIcon === "list"} />
            <Text
              style={[
                styles.navText,
                { color: activeIcon === "list" ? "white" : "grey" },
              ]}
            >
              Listes
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <TouchableOpacity
            style={styles.navItemContent}
            onPress={() => {
              setActiveIcon("account");
              navigation.navigate("Account");
            }}
          >
            <IconAccount active={activeIcon === "account"} />
            <Text
              style={[
                styles.navText,
                { color: activeIcon === "account" ? "white" : "grey" },
              ]}
            >
              Profil
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF',
    backgroundColor: '#0B0B0B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    paddingHorizontal: 30,
},
  navItem: {
    alignItems: 'center',
  },

  navItemContent: {
    display: 'flex',
    alignItems: 'center'
  },
  navText: {
    color: '#fff',
    fontSize: 8,
    fontFamily: 'Montserrat-Medium',
    marginTop: 4,
  },
});

export default Navbar;