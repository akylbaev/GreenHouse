import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Slider, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IndicatorViewPager, PagerTitleIndicator, PagerTabIndicator } from 'rn-viewpager';
import {DropDown} from 'react-native-material-dropdown';
import SegmentControl from 'react-native-segment-controller';

url = '192.168.0.114:3000';

export default class GreenHouse extends React.Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 1,
      light: false,
      water: false,
      cond: false,
      sliderValue: 10,
      temp: [],
      hum: []
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  async componentDidMount(){
    this.getTemp()
    this.getHum()
  }

  getTemp(){
    fetch('http://'+url+'/temp/get', {
      method: 'POST'
    })
      // .then((response) => response.toString())
      // .then((responseJson) => {
      //   this.setState({temp: responseJson});
      //   console.log(this.state.temp);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
  }

  getHum(){
    fetch('http://'+url+'/hum/get', {
      method: 'POST'
    })
  }

  setTemp(){
    
  }

  _onPressLight(){
    const newState = !this.state.light;
    this.setState({light: newState})

    const lightState = this.state.light
    const value = lightState?"off":"50";
     
    fetch('http://'+url+'/bulb/'+value, {
      method: 'POST'
    })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   console.log(responseJson);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
}

_setLight(){
  const index = this.state.selectedIndex
  if (index === 0){
  fetch('http://'+url+'/bulb/25', {
      method: 'POST'
    })
  } else if (index === 1){
    fetch('http://'+url+'/bulb/75', {
      method: 'POST'
    })
  } else if (index === 2){
    fetch('http://'+url+'/bulb/150', {
      method: 'POST'
    })
  } else if (index === 3){
    fetch('http://'+url+'/bulb/253', {
      method: 'POST'
    })
  }
}


_onPressWater(){
  const newState = !this.state.water;
  this.setState({water: newState})

  fetch('http://'+url+'/water/on', {
      method: 'POST'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
}

_onPressCond(){
  const newState = !this.state.cond;
  this.setState({cond: newState})
  const condState = this.state.cond
  const value = condState?"off":"on";
  fetch('http://192.168.0.114:3000/vent/'+value, {
      method: 'POST'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
}

  updateIndex(selectedIndex){
    this.setState({selectedIndex: selectedIndex})
  }

  render() {
    const {light, water, cond, selectedIndex} = this.state;
    const bgButtonLight = light?'#4ec3cd':'transparent';
    const bgButtonWater = water?'#4ec3cd':'transparent';
    const bgButtonCond = cond?'#4ec3cd':'transparent';
    return (
      <View style = {styles.container}>
        <IndicatorViewPager
            style = {{flex: 1, flexDirection: 'column-reverse'}}
            indicator = {this._renderTabIndicator()}
          >
          <View style = {{flex: 1, alignItems: 'center'}}>
            <View style = {{width: 180, 
                              height: 180,
                              borderRadius: 90,
                              shadowColor: '#4ec3cd',
                              shadowOffset: { width: 0, height: 4 },
                              shadowOpacity: 0.4,
                              shadowRadius: 10,
                              elevation: 8,
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: 50,
                            }}>

                <View style = {{width: 150, 
                              height: 150,
                              borderRadius: 75,
                              shadowColor: '#000',
                              shadowOffset: { width: 0, height: 4 },
                              shadowOpacity: 0.4,
                              shadowRadius: 10,
                              elevation: 8,
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                <Text style = {{fontSize: 40, color: '#4ec3cd'}}>{this.state.temp}°C</Text>
                </View>
            </View>
            <Slider style = {{marginTop: 30, width: 300,}} maximumValue = {40} thumbTintColor='#4ec3cd' value = {this.state.sliderValue} step = {1} minimumValue = {0}  minimumTrackTintColor = '#4ec3cd' onValueChange = {(value) => this.setState({sliderValue: value})}/>
            <Text>{this.state.sliderValue}°C</Text>
            <TouchableOpacity style = {{height: 50, width: 200, borderRadius: 30, backgroundColor: '#4ec3cd', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
              <Text style = {{fontSize: 24, color: '#fff'}}>SET</Text>
            </TouchableOpacity>
          </View>

          <View style = {{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity style = {{width: 180, 
                              height: 180,
                              borderRadius: 90,
                              shadowColor: '#4ec3cd',
                              shadowOffset: { width: 0, height: 4 },
                              shadowOpacity: 0.4,
                              shadowRadius: 10,
                              elevation: 8,
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: 50,
                              backgroundColor: bgButtonLight
                            }}
                            onPress = {() => this._onPressLight()}
                            >
              <Image source ={require('../../Assets/power.png')} />
            </TouchableOpacity>
            <View style = {{marginTop: 50, width: 250}}>
              <SegmentControl
                values = {['25%', '50%', '75%', '100%']}
                selectedIndex = {selectedIndex}
                height = {30}
                borderRadius = {5}
                onTabPress = {this.updateIndex}
                style = {{marginTop: 50}}
                />
            </View>
            <TouchableOpacity style = {{height: 50, width: 200, borderRadius: 30, backgroundColor: '#4ec3cd', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
              <Text style = {{fontSize: 24, color: '#fff'}}>SET</Text>
            </TouchableOpacity>
          </View>
          
          <View style = {{flex: 1, alignItems: 'center'}}>
            <View style = {{width: 180, 
                              height: 180,
                              borderRadius: 90,
                              shadowColor: '#4ec3cd',
                              shadowOffset: { width: 0, height: 4 },
                              shadowOpacity: 0.4,
                              shadowRadius: 10,
                              elevation: 8,
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: 50,
                            }}>

                <View style = {{width: 150, 
                              height: 150,
                              borderRadius: 75,
                              shadowColor: '#000',
                              shadowOffset: { width: 0, height: 4 },
                              shadowOpacity: 0.4,
                              shadowRadius: 10,
                              elevation: 8,
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                <Text style = {{fontSize: 40, color: '#4ec3cd'}}>24%</Text>
                </View>
            </View>
          </View>
          
          <View style = {{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity style = {{width: 180, 
                              height: 180,
                              borderRadius: 90,
                              shadowColor: '#4ec3cd',
                              shadowOffset: { width: 0, height: 4 },
                              shadowOpacity: 0.4,
                              shadowRadius: 10,
                              elevation: 8,
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: 50,
                              backgroundColor: bgButtonWater
                            }}
                            onPress = {() => this._onPressWater()}>
              <Image source ={require('../../Assets/power.png')} />
            </TouchableOpacity>
          </View>

          <View style = {{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity style = {{width: 180, 
                              height: 180,
                              borderRadius: 90,
                              shadowColor: '#4ec3cd',
                              shadowOffset: { width: 0, height: 4 },
                              shadowOpacity: 0.4,
                              shadowRadius: 10,
                              elevation: 8,
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: 50,
                              backgroundColor: bgButtonCond
                            }}
                            onPress = {() => this._onPressCond()}>
              <Image source ={require('../../Assets/power.png')} />
            </TouchableOpacity>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }

  _renderTabIndicator() {
    let tabs = [{
            text: 'Temperature',
            iconSource: require('../../Assets/Icons/thermometer.png'),
            selectedIconSource: require('../../Assets/Icons/thermometer.png'),
        },{
            text: 'Light',
            iconSource: require('../../Assets/Icons/light-bulb.png'),
            selectedIconSource: require('../../Assets/Icons/light-bulb.png'),
        },{
            text: 'Humidity',
            iconSource: require('../../Assets/Icons/humidity.png'),
            selectedIconSource: require('../../Assets/Icons/humidity.png'),
        },{
            text: 'Water',
            iconSource: require('../../Assets/Icons/water.png'),
            selectedIconSource: require('../../Assets/Icons/water.png'),
        },{
            text: 'Conditioner',
            iconSource: require('../../Assets/Icons/ventilator.png'),
            selectedIconSource: require('../../Assets/Icons/ventilator.png'),
  }];
    return <PagerTabIndicator
              style={styles.indicatorContainer}
              iconStyle={styles.tabIcon}
              selectedIconStyle={styles.selectedTabIcon}
              textStyle={styles.tabTxt}
              selectedTextStyle={styles.selectedTabTxt}
              itemStyle={styles.tabItem}
              selectedItemStyle={styles.selectedTabItem}
              tabs={tabs} />;
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    backgroundColor: 0xFFFFFFFF,
    borderTopWidth: 0,
    height: 56,
    paddingTop: 0,
    paddingBottom: 0
},
tabIcon: {
    width: 20,
    height: 20,
    tintColor: '#A1A1A1',
    resizeMode: 'contain'
},
selectedTabIcon: {
    width: 20,
    height: 20,
    tintColor: '#4ec3cd',
    resizeMode: 'contain'
},
tabTxt: {
    color: '#A1A1A1',
    marginTop: 0,
    fontSize: 10.5
},
selectedTabTxt: {
    color: '#4ec3cd',
    marginTop: 0,
    fontSize: 12
},
tabItem: {
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 8,
    borderBottomColor: '#A1A1A1',
    borderBottomWidth: 1,
},
selectedTabItem: {
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 6,
    borderBottomColor: '#4ec3cd',
    borderBottomWidth: 2,
}
  
});