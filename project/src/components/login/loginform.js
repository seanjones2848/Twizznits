//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigation } from 'react-navigate';

// create a component
class Button extends Component {
    render() {
		const { navigate } = this.props.navigation;
        return (
        <TouchableOpacity onPress={() => navigate('Options')}
        	style={styles.buttonContainer}>
            <Text style={styles.buttonText} >{this.props.text}</Text>
        </TouchableOpacity>
        );
    }
}
class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                barstyle="light-content"
                />
                <TextInput
                placeholder="username or email"
                placeholderTextColor="rgba(255,255,255,.7)"
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                style={styles.input}
                />
                <TextInput
                placeholder="password"
                secureTextEntry
                returnKeyType="go"
                placeholderTextColor="rgba(255,255,255,.7)"
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />
                <Button text="LOGIN"/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    buttonContainer:{
        height: 50,
        backgroundColor: '#B806E3',
        padding: 10
    },
    buttonText:{
        fontSize: 25,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    input:{
        height: 50,
        backgroundColor: 'rgba(255,255,255,.2)',
        marginBottom: 10,
        padding: 10
    },
    container: {
        padding: 20
    },
});

//make this component available to the app
export default LoginForm;
