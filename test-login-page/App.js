import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// const buttonColor = 'gray';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text h1 style={styles.header}>SnackIndex Login</Text>
        {/*<StatusBar style="auto" /> */}
        <TextInput style={styles.textbox} 
        placeholder="Username"></TextInput>
        <TextInput style={styles.textbox} 
        placeholder="Password"></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
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
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    alignItems: "center",
    //paddingBottom: '40%',
  },

  header: {
    height: '10%',
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: '15%',
  },

  textbox: {
    width: '85%',
    height: 50,
    margin: 15,
    padding: 12,
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 18,
  },

  button: {
    width: '85%',
    color: '#fff',
    backgroundColor: "gray",
    borderRadius: 4,
    alignItems: "center",
    padding: 20,
  },

  buttonText: {
    color: 'white',
  }


})
