//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class Logo extends Component {
    render() {
        return (
            <View>
            <Image 
            style={styles.logo}
            source={require('../../images/younsn.png')}
            />
            <Text style={styles.title}>
                Stay connected, stay younited.
            </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 100,
        borderRadius: 10
    }
});

//make this component available to the app
export default Logo;
