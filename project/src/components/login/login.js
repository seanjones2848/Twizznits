import React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginform';
import { StackNavigator } from 'react-navigation';
export default class Login extends React.Component {
    static navigationOptions  = {
        title: 'Login',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
            style={styles.logo}
            source={require('../../images/younsn.png')}
            />
            <Text style={styles.title}>
                Stay connected, stay younited.
            </Text>
        </View>
        <View style={styles.formContainer}>
            <LoginForm />
        </View>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    title:{
        color: 'black',
        marginTop: 30,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },

    container: {
        flex: 1,
        backgroundColor: '#282425'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 100,
        borderRadius: 10
    }
});