// Index.ios.js - place code in here for Android

// Import a library to help create a component
import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HotelList from './src/components/HotelList';
import HotelInside from './src/components/HotelInside';


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


const SimpleApp = StackNavigator({
  Home: { screen: HotelList },
  HotelInside: {screen: HotelInside }
})

AppRegistry.registerComponent('hotelApp', () => SimpleApp);
