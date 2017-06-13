// Index.ios.js - place code in here for Android

// Import a library to help create a component
import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';

import HotelList from './src/components/HotelList';
import HotelInside from './src/components/HotelInside';
import DesayunoView from './src/components/DesayunoView';



// Create a component
export default class App extends Component {
  render() {

    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <HotelList navigation={ navigation } />
      </View>
    )
  }
}


const SimpleApp = TabNavigator({
  Home: { screen: HotelList },
  HotelInside: { screen: HotelInside },
  DView: { screen: DesayunoView }
})

AppRegistry.registerComponent('hotelApp', () => SimpleApp);
