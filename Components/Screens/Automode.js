import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';


export default class Automode extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      switchState: false
    }
  }

  changeValue(value){
    this.setState({switchState: value})
  }

  render() {
    return (
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{fontSize: 40, color: '#4ec3cd'}}>Automode</Text>
        <Switch
              value = {this.state.switchState}
              onValueChange = {(value) => this.changeValue(value)}
              
              />
      </View>
    );
  }
}
