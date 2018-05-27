import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import SignIn from './Screens/SignIn';
import GreenHouse from './Screens/GreenHouse';
import Profile from './Screens/Profile';
import Automode from './Screens/Automode';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Routes extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
    AuthScreen: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    TabBar: createBottomTabNavigator({
        GreenHouseScreen: {
            screen: GreenHouse,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" style={{ color: tintColor }} size={25}/>
                ),
                title: "GreenHouse",
                headerLeft: null
              }
        },
        AutomodeScreen: {
            screen: Automode,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="retweet" style={{ color: tintColor }} size={21}/>
                ),
                title: "Automode",
                header: null
              }
        },
        ProfileScreen: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="user" style={{ color: tintColor }} size={21}/>
                ),
                title: "Profile",
                header: null
              }
        },
    },{
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
          activeTintColor: '#4ec3cd',
          inactiveTintColor: '#A1A1A1',
          showIcon: true,
          labelStyle: {
            fontSize: 8
          },
          renderIndicator: () => null,
        }
      }),
})
