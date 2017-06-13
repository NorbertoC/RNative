// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const Header = (props) => {
  const { viewStyle, ImageStyle } = styles;


  return (
    <View style={viewStyle}>
      <Image
        style={ImageStyle}
        source={{ uri: props.imageSource }}
      />
    </View>
  );
}

const styles = {
  viewStyle: {
    paddingBottom: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    marginBottom: -50
  },
  ImageStyle: {
    flex: 1,
    width: null
  }
}

// Make the component available to other parts of the app
export default Header;

