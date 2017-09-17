import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/login/login';
import Options from './src/components/options/options';
import Splash from './src/components/splash/splash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    
    };
  }

render() {
  return (
   <Login />
//    <Options username="Louise"/>
//    <Splash />
  );
}
}
export const SimpleApp = StackNavigator ({
  Splash: { screen: Splash },
  Login: { screen: Login },
  Options: { screen: Options },

});
const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 100,
    borderRadius: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
