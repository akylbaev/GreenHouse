import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

export default class Profile extends React.Component {
  
  render() {
    const { navigate } = this.props.navigation
    return (
        <View style = {styles.container}>
            <View style = {{width: 180, height: 180, borderRadius: 90, marginTop: 40}}>
              <Image source = {require('')} />
            </View>
            <Text>Location</Text>
            <TouchableOpacity style = {styles.button} onPress = {() => navigate('SignIn')}><Text>Sign Out</Text></TouchableOpacity>
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
    width: 250,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
}
});
