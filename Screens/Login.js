//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.title}>Adaptive Calendar</Text>
                <TextInput style = {styles.input} placeholder = "Username" />
                <TextInput style = {styles.input} placeholder = "Password" secureTextEntry />
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.liSuButton} onPress = {() => alert("login works")}>
                        <Text style = {styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.liSuButton} onPress = {() => alert("signup works")}>
                        <Text style = {styles.buttonText}>
                            Signup
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input: {
        width : 90,
        backgroundColor : '#fff',
        padding : 10,
        maringBottom : 10
    },
    title : {fontSize : 20, 
        color : '#fff', 
        margin : 10, 
        fontFamily : "DancingScript-Bold"
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '90%'
    },
    liSuButton : {
        backgroundColor : '#FFD700',
        padding : 15,
        width  : '45%'
    },
    buttonText : {
        fontSize : 18,
        textAlign : 'center',
    }
});

//make this component available to the app
export default Login;
