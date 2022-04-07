import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Header from './components/Header';
import Todo from './components/Todo';

// or any pure javascript modules available in npm
const Height = window.innerHeight;
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1c2566',
    height: "100%",
  },

});

// #ecf0f1

// flex: 1,
//     justifyContent: 'center',
    // padding: 8,

  //   ,
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },