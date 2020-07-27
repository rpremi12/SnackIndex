import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <nav></nav>
      <View style={styles.loginContainer}>
        <Text h1 style={styles.header}>SnackIndex Login</Text>
        <StatusBar style="auto" />
        <TextInput style={styles.textbox} 
        placeholder="Username"></TextInput>
        <TextInput style={styles.textbox} 
        placeholder="Password"></TextInput>
      </View>   
    </View>     /* End of container */
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginContainer: {
    alignContent: 'center',
    width: '85%',
    //paddingBottom: '40%',
  },

  header: {
    height: '10%',
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: '20%',
  },

  textbox: {
    height: 50,
    margin: 15,
    padding: 12,
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 18,
    
    
  }
})
