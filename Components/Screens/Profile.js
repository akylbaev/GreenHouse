import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';


const { height, width } = Dimensions.get('window');

export default class Profile extends React.Component {
  
  render() {
    const { navigate } = this.props.navigation
    return (
        <View style = {styles.container}>
            <View style = {{width: width, height: 250}}>
              <Image source = {require('../../Assets/myGH.jpg')} style = {{width: width, height: 250}} resizeMode = {'cover'}/>
            </View>
            <View style = {{marginHorizontal: 20}}>
              <Text style = {{color: '#4ec3cd', fontSize: 30, fontWeight: '900'}}>My Green House</Text>

              <Text style = {{color: '#a3a3a3', fontSize: 12, marginTop: 12}}>Location:</Text>
              <Text style = {{color: '#3a3a3a', fontSize: 20, fontWeight: '300'}}>Almaty, Tole-Bi 102</Text>

            </View>
            <TouchableOpacity style = {styles.button} onPress = {() => navigate('AuthScreen')}><Text style = {{color: '#4ec3cd', fontSize: 18}}>Sign Out</Text></TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: width*0.8,
    borderWidth: 1,
    borderColor: '#4ec3cd',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30
}
});
