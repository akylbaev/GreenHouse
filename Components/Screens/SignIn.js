import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import {TextField} from 'react-native-material-textfield';

const { height, width } = Dimensions.get('window');

export default class SignIn extends React.Component {
    doNothing(){
        
    }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style = {styles.container}>
        <Image source = {require('../../Assets/logo.png')} style = {styles.logo}/>
        <TextField
            label = "USERNAME"
            onChangeText = {() => this.doNothing()}
        />
        <TextField
            label = "Password"
            secureTextEntry = {true}
            onChangeText = {() => this.doNothing()}
        />
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('TabBar')}><Text>SignIn</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 235,
        height: 82,
        marginTop: 40,
    },
    button: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
