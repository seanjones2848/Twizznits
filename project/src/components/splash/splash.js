//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class Splash extends Component {
    static navigationOptions  = {
        title: 'Splash',
    };
    render() {
        return (
            <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../../images/LOGO.png')}
            />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    logo: {
        flex: 1,
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
export default Splash;
