import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class RegistrationPg extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
        
                <Text h1 style={styles.header}>Registration</Text>

                {/* Text Input Fields */}
                <TextInput style={styles.textbox} 
                placeholder="First Name">
                </TextInput>

                <TextInput style={styles.textbox} 
                placeholder="Last Name">
                </TextInput>

                <TextInput style={styles.textbox} 
                placeholder="Email Address">
                </TextInput>
                
                {/* Text Input Fields */}
                <TextInput style={styles.textbox} 
                placeholder="Username">
                </TextInput>
        
                <TextInput style={styles.textbox} 
                placeholder="Password">
                </TextInput>

                <TextInput style={styles.textbox} 
                placeholder="Confirm Password">
                </TextInput>

        
                {/* Create Acc Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
        
                </View>   
            </View> 
        ); 
    }
    
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
      paddingBottom: '10%',
    },
  
    header: {
      height: '10%',
      justifyContent: "center",
      textAlign: "center",
      paddingBottom: '15%',
      fontSize: 36,
      fontFamily: 'europa',
      fontWeight: '700',
    },
  
    textbox: {
      width: '85%',
      height: 50,
      margin: 15,
      padding: 12,
      borderWidth: 2,
      borderRadius: 12,
      fontSize: 18,
      fontFamily: 'europa',
    },
  
    inlineTextbox: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  
    textboxHalf: {
      width: '38.5%',
      height: 50,
      margin: 15,
      padding: 12,
      borderWidth: 2,
      borderRadius: 12,
      fontSize: 18,
      fontFamily: 'europa',
    },
  
    button: {
      width: '85%',
      color: '#fff',
      backgroundColor: "gray",
      borderRadius: 12,
      alignItems: "center",
      padding: 20,
      marginTop: 0,
    },
  
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontFamily: 'europa',
    },
  
    textInline1: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '5%',
      paddingTop: 0,
      marginLeft: 'auto',
      marginRight: '3%',
    },
  
    textInline2: {
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
      fontFamily: 'europa',
    },
  
    linkTextBoldPass: {
      color: 'black',
      fontSize: 16,
      paddingTop: 0,
      fontFamily: 'europa',
    },
  
    linkText: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'europa',
    },
  
  
  })