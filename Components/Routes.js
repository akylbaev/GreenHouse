import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

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

const AppStackNavigator = StackNavigator({
    AuthScreen: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    TabBar: {
        screen: TabNavigator({
        GreenHouseScreen: {
            screen: GreenHouse,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" style={{ color: tintColor }} size={21}/>
                ),
                title: "GreenHouse",
              }
        },
        AutomodeScreen: {
            screen: Automode,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="retweet" style={{ color: tintColor }} size={21}/>
                ),
                title: "Automode",
              }
        },
        ProfileScreen: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name="user" style={{ color: tintColor }} size={21}/>
                ),
                title: "Profile",
              }
        },
    },{
        animationEnabled: false,
        swipeEnabled: false,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
            ...Platform.select({
                android: {
                backgroundColor: 'white',
                }
            })
            },
          activeTintColor: '#4ec3cd',
          inactiveTintColor: '#A1A1A1',
          showIcon: true,
          labelStyle: {
            fontSize: 8
          },
          renderIndicator: () => null,
        }
      }),
      
    }
}, {
    navigationOptions: {
        headerLeft: null
    }
})
