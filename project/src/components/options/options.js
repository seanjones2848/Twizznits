//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
class Options extends Component {
    static navigationOptions  = {
        title: 'Options',
    };
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.logoContain}>
            <Image 
                style={styles.logo}
                source={require('../../images/full_LOGO.png')}
            />
            <View style={styles.subLogoContain}>
            <Text style={styles.subLogo}>Welcome {this.props.username}!</Text>
            <Text style={styles.subLogo}>Which accounts do you want to synchronize?</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Image
                style={styles.button}
                source={require('../../images/starttheexperience.png')}
                />
            </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    logoContain: {
        flex: 1,
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        height: 20,
        padding: 10,
    },
    button:{
        height: 68/1.2,
        width: 431/1.2,
    },
    subLogoContain: {
        marginTop: 30,
    },
    subLogo: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282425',
    },
});

//make this component available to the app
export default Options;
