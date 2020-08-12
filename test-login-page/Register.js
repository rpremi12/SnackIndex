import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles'

export default function RegistrationPg() {
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
                secureTextEntry={true} 
                placeholder="Password">
                </TextInput>

                <TextInput style={styles.textbox} 
                secureTextEntry={true}
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
    


