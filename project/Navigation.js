npm install --save react-navigation

import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class LoginScreen extends React.Component {
	static vavigationOptions = {
		title: 'Welcome',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>Hello World!</Text>;
				<Button
					onPress={() => navigate('Next', {
						param1: 'Doop', 
						param2: 'Foop',
					})}
					title="Takes you to the next screen"
				/>
			</View>
		);
	}
}

class LoadScreen extends React.Component {
	static naviationOptions = ({ navigation }) => ({
		title: 'This is ${navigation.state.params.param1}',
	});
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View>
				<Text>Some texticles with {params.param2}</Text>
			</View>
		);
	}
				}

class SyncScreen extends React.Component {
	static naviationOptions = ({ navigation }) => ({
		title: 'This is ${navigation.state.params.param1}',
	});
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View>
				<Text>Some texticles with {params.param2}</Text>
			</View>
		);
	}
}

class SettingScreen extends React.Component {
	static naviationOptions = ({ navigation }) => ({
		title: 'This is ${navigation.state.params.param1}',
	});
	render() {
		const { params } = this.props.navigation.state;
		return (
			<View>
				<Text>Some texticles with {params.param2}</Text>
			</View>
		);
	}
}

export default const Younisn = StackNavigator({
	Login: { screen: LoginScreen },
	Load: { screen: LoadScreen },
	Sync: { screen: SyncScreen },
	Setting: { screen: SettingScreen },
});

//AppRegistry.registerComponent('Younisn', () => Younisn);

