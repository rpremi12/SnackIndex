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
        
        {/* Text Input Fields */}
        <TextInput style={styles.textbox} 
        placeholder="Username">
        </TextInput>

        <TextInput style={styles.textbox} 
        placeholder="Password">
        </TextInput>

        {/* Forgot Password Button */}
        <View style={styles.textInline}> 
            <TouchableOpacity>
              <Text style={styles.linkTextBoldPass}>Forgot your Password?</Text>
            </TouchableOpacity>
          </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Registration Button */}
          <View style={styles.textInline}> 
            <TouchableOpacity>
              <Text h3 style={styles.linkText}>Don't have an account? <Text style={styles.linkTextBold}>Register</Text></Text> 
            </TouchableOpacity>
          </View>

      </View>   
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

  loginContainer: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
    alignItems: "center",
    paddingBottom: '40%',
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
    borderRadius: 12,
    fontSize: 18,
  },

  button: {
    width: '85%',
    color: '#fff',
    backgroundColor: "gray",
    borderRadius: 12,
    alignItems: "center",
    padding: 20,
    marginTop: '10%',
  },

  buttonText: {
    color: 'white',
  },

  textInline: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '5%',
    marginLeft: 'auto',
    marginRight: '3%',
  },

  linkTextBold: {
    color: 'black',
    fontSize: 16,
    marginTop: 0,
  },

  linkTextBoldPass: {
    color: 'black',
    fontSize: 16,
    paddingTop: 0,
  },

  linkText: {
    color: 'black',
    fontSize: 16,
  },


})
