import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CommunicationController from './model/CommunicationController';






export default function App() {



useEffect(() => {
    CommunicationController.registerUser()
    .then((response) => {
        console.log("registerUser response: ", response);
        saveSidLocally(response.sid);  // Richiamo della funzione importata
    })
    .catch((error) => {
        console.error("registerUser error: ", error);
    });
}, []);


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
