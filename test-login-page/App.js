import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  RegistrationPg  from './Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Adobe font embed
(function(d) {
  var config = {
    kitId: 'sdk5xhw',
    scriptTimeout: 3000,
    async: true
    },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// Page Navigation Structure
const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log In">
        <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="Register" component={RegistrationPg} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Login({ navigation })  {
    return (

    <View style={styles.container}>
      <View style={styles.loginContainer}>

        <Text h1 style={styles.header}>Logo Here</Text>
        
        {/* Text Input Fields */}
        <TextInput style={styles.textbox} 
        placeholder="Username">
        </TextInput>

        <TextInput style={styles.textbox} 
        placeholder="Password">
        </TextInput>

        {/* Forgot Password Button */}
        <View style={styles.textInline1}> 
            <TouchableOpacity>
              <Text style={styles.linkTextBoldPass}>Forgot your Password?</Text>
            </TouchableOpacity>
          </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Registration Button */}
          <View style={styles.textInline2}> 
            <TouchableOpacity onPress={ () => navigation.navigate('Register') }>
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