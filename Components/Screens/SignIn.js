import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';

const { height, width } = Dimensions.get('window');

export default class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          username: "",
          password: ""
        }
      }

  render() {
    const { navigate } = this.props.navigation
    let {username, password} = this.state
    return (
      <View style = {styles.container}>
        <Image source = {require('../../Assets/logo.png')} style = {styles.logo}/>
    
            <TextInput
                style={{height: 40, width: width * 0.8, marginTop: 15}}
                onChangeText={(text) => this.setState({username: text})}
                placeholder = "Username"
                placeholderTextColor = '#a3a3a3'
            />

            <TextInput
                style={{height: 40, width: width * 0.8, marginTop: 15}}
                onChangeText={(text) => this.setState({username: text})}
                secureTextEntry = {true}
                placeholder = "Password"
                placeholderTextColor = '#a3a3a3'
            />
        <TouchableOpacity style = {styles.button} onPress = {() => navigate('TabBar')}><Text style = {{color: '#4ec3cd', fontSize: 18}}>Sign In</Text></TouchableOpacity>
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
        width: width*0.8,
        borderWidth: 1,
        borderColor: '#4ec3cd',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    }
})
