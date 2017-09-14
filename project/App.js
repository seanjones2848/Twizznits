import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class OpenScreen extends React.Component {
  handlePress() {
    console.log("lol");
      <text>You really know how to push my buttons!</text>
  }

render() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Consensus.</Text>
      <Text>Here to personalize your car experience.</Text>
      <Button
      onPress={() => this.handlePress()}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
}

export default class App extends React.Component {
  
render() {
  return (
    <OpenScreen />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
